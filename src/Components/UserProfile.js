import React from "react";
import ProfileCard from "./ProfileCard";
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import UserDataContext from '../Context/UserData/UserDataContext';

// import VideoCard from "./VideoCard";


export default function UserProfile() {

  const is_loggedin = useContext(LoggedInStatusContext);
  const userData = useContext(UserDataContext);

  async function getUserProfile() {
    let userObject = {
      "email": localStorage.getItem('userEmail')
    }
    await fetch(`${userData.backendApi}/getUserProfile/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    }).then(response => response.json()).then((data) => {
      if (data.status === 200) {
        let profile_pic_src = `${userData.backendApi}` + data.profile_pic.profile_pic;
        userData.setUserProfilePhotoLink(profile_pic_src);
        userData.setFirstName(data.firstName);
        userData.setLastName(data.lastName);
        userData.setUploadCount(data.uploadCount);
        userData.setBookmarkCount(data.bookmarkCount);
        userData.setSeenCount(data.videoSeenCount);
        userData.setDateJoined(data.dateJoined);
      }
      else {
        alert(data.response);
      }
    });
  }
  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      is_loggedin.setLoggedin(true);
    }
    if (is_loggedin.loggedin === true) {
      getUserProfile();
    }


  })
  return (
    <>
      <ProfileCard />

      <br />
      <br />

      <div className=" text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="/">
                Your Uploads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Bookmark
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                History
              </a>
            </li>

            <li className="nav-item">
              {/* search bar here */}
              <div className="input-group">
                <div className="form-outline"></div>
              </div>
            </li>
          </ul>
        </div>

        <div id="UserContentData">{/* <VideoFeed /> */}</div>
      </div>
    </>
  );
}
