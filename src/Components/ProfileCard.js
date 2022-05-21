import React from 'react';
import '../Styles/ProfileCard.scss';
import { useContext } from 'react';
import UserDataContext from '../Context/UserData/UserDataContext';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';

export default function ProfileCard() {
  const userData = useContext(UserDataContext);
  const is_loggedin = useContext(LoggedInStatusContext);

  const handleDeleteUserAccount = () => {
    let deleteConfirmation = window.confirm("Are you sure you want to delete your account ?\nYou wouldn't be able to access your account again!");
    if (deleteConfirmation) {
      let deleteConfirmation2 = window.confirm("Please confirm again");
      if (deleteConfirmation2) {
        AsyncDeleteUserAccount();
      }
    }
  }

  async function AsyncDeleteUserAccount() {
    let userObject = {
      "email": localStorage.getItem("userEmail")
    }
    await fetch(`${userData.backendApi}/deleteUserAcc/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    }).then(response => response.json()).then((data) => {
      if (data.status === 200) {
        alert(data.response);
        localStorage.removeItem("userEmail");
        localStorage.clear();
        is_loggedin.setLoggedin(false);
        document.getElementById("leftBar-LoginBtn").click();
      }
      else {
        alert(data.response);
      }
    });
  }

  return (
    <>

      <div className="wrapper">
        {/* wrapper class consist all elements */}
        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src={userData.userProfilePhotoLink} alt="profile card" />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{userData.firstName} {userData.lastName}</div>

            <div className="profile-card__txt">Joined on, {(userData.dateJoined).split("T")[0]}<strong></strong></div>
            {/* description */}
            <div className="profile-card-loc">
              <span className="profile-card-loc__icon">
                <svg className="icon"> </svg>
              </span>

            </div>

            <div className="profile-card-inf">
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{userData.uploadCount}</div>
                <div className="profile-card-inf__txt">Uploads</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{userData.bookmarkCount}</div>
                <div className="profile-card-inf__txt">Bookmarks</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{userData.seenCount}</div>
                <div className="profile-card-inf__txt">Videos Seen</div>
              </div>
            </div>


            <div className="profile-card-ctr">
              <button className="profile-card__button button--blue js-message-btn">Clear History</button>
              <button onClick={handleDeleteUserAccount} className="profile-card__button button--orange">Delete Account</button>
            </div>
          </div>


        </div>

      </div>

    </>
  )
}
