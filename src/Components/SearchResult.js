import React from 'react'
import UserDataContext from '../Context/UserData/UserDataContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from './Spinner';
import ApplicationModeContext from '../Context/ApplicationMode/ApplicationModeContext';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import VideoCard from './VideoCard';

let vidArray = [];
export default function SearchResult() {
  const applicationMode = useContext(ApplicationModeContext);
  const userData = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);
  const is_loggedin = useContext(LoggedInStatusContext);



  useEffect(
    () => {
      if (localStorage.getItem("userEmail") !== null) {
        is_loggedin.setLoggedin(true);
        userData.setSearchQuery(localStorage.getItem("searchQuery"))
      }
      if (applicationMode.mode === "light") {
        document.getElementById("heading").style.color = "#282828";
      }
      else {
        document.getElementById("heading").style.color = "white";
      }
      function searchVideoData() {
        let userObject = {
          "search_string": localStorage.getItem("searchQuery"),
          "email": localStorage.getItem("userEmail")
        }

        fetch(`${userData.backendApi}/searchVideo/`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {

          if (data.status === 200) {
            if (data.response === "No result found") {
              document.getElementById("heading").innerHTML = `
📑No Search Results found for the term <i>"${userData.searchQuery}"</i>
`
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
            }
          }
          else {
            alert(data.response);
          }

          setLoading(false);
        });
      }

      searchVideoData();
    })

  return (
    <div id="searchResult">
      <div className="my-4">
        <div className="my-4 ms-l-5">
          <div className="text-center fs-2 mb-2">
            <h2 id="heading" className="text-center my-4">Search Results for <i>"{userData.searchQuery}"</i></h2>
          </div>
        </div>

        <div className="d-flex my-5" style={{ flexWrap: "wrap", justifyContent: "center" }}>
          {loading && is_loggedin.loggedin && <Spinner />}

          {
            !loading &&
            vidArray.map((val) => {
              return (
                <>
                  <VideoCard key={val.sno + 3} sno={val.sno} videoTitle={val.title} videoChannelPhoto={val.video_uploader_img} videoThumbnail={`${userData.backendApi}${val.thumbnail}`} channelName={val.channelName} views={val.video_views} videoUploadingTime={(val.timestamp).split("T")[0]} />
                </>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}
