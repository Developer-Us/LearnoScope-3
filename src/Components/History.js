import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ApplicationModeContext from '../Context/ApplicationMode/ApplicationModeContext';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import UserDataContext from '../Context/UserData/UserDataContext';
import { useState } from 'react';
import Spinner from './Spinner';
import VideoCard from './VideoCard';

let vidArray = [];
let vidArrayReverse = [];
export default function Bookmark() {
  const applicationMode = useContext(ApplicationModeContext);
  const is_loggedin = useContext(LoggedInStatusContext);
  const userData = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      is_loggedin.setLoggedin(true);
    }
    if (is_loggedin.loggedin === true) {
      getHistoryData(); // for getting Bookmark Data
    }
    if (applicationMode.mode === "light") {
      document.getElementById("heading").style.color = "#282828";
    }
    else {
      document.getElementById("heading").style.color = "white";
    }
  })

  async function getHistoryData() {
    let userObject = {
      "email": localStorage.getItem('userEmail')
    }
    await fetch(`${userData.backendApi}/getUserHistory/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    }).then(response => response.json()).then((data) => {
      if (data.status === 200) {
        if (data.response.length === 0) {
          document.getElementById("heading").innerHTML = `
 📑You haven't watched any video yet !
           `;
          console.log("history data : ", data);
        }
        else {
          for (var i = 0; i < data.response.length; i++) {
            vidArray[i] = {};
            vidArray[i].title = data.response[i].video_title;
            vidArray[i].desc = data.response[i].video_desc;
            vidArray[i].thumbnail = data.response[i].video_thumbnail;
            vidArray[i].sno = data.response[i].sno;
            vidArray[i].video_file = data.response[i].video_file;
            vidArray[i].video_views = data.response[i].video_views;
            vidArray[i].timestamp = data.response[i].timestamp;
            vidArray[i].channelName = data.response[i].username;
            vidArray[i].video_likes = data.response[i].video_likes;
            vidArray[i].video_desc = data.response[i].video_desc;
            vidArray[i].notes_file = `${userData.backendApi}` + data.response[i].notes_file;
            vidArray[i].video_uploader_img = `${userData.backendApi}` + data.response[i].video_uploader_img;
            vidArray[i].sno = data.response[i].sno;
          }
          vidArrayReverse = vidArray.reverse();
        }
      }
      else {
        alert("server error! Please try later");
      }
      setLoading(false);
    }, []);
  }
  return (<>
    <div id="Histories">
      <div className="my-4">
        <div className="my-4 ms-l-5">
          <div id="heading" className="text-center fs-2 mb-2">
            📑Your History
          </div>
        </div>

        <div className="d-flex my-5" style={{ flexWrap: "wrap", justifyContent: "center" }}>
          {loading && is_loggedin.loggedin && <Spinner />}

          {
            !loading &&
            vidArrayReverse.map((val) => {
              return (
                <>
                  <VideoCard key={val.sno + 4} sno={val.sno} videoTitle={val.title} videoChannelPhoto={val.video_uploader_img} videoThumbnail={`${userData.backendApi}${val.thumbnail}`} channelName={val.channelName} views={val.video_views} videoUploadingTime={(val.timestamp).split("T")[0]} />
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  </>);

}
