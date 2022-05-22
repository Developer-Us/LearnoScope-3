import { useState } from "react";
import UserDataContext from "./UserDataContext";


const UserDataState = (props) => {
    const [userEmail, setUserEmail] = useState("");
    let [roomMessages, setRoomMessages] = useState({});
    let [videoFeedData, setVideoFeedData] = useState([]);

    let [currentVideoLink, setCurrentVideoLink] = useState("");
    let [currentVideoTitle, setCurrentVideoTitle] = useState("");
    let [currentVideoChannelName, setCurrentVideoChannelName] = useState("");
    let [currentVideoLikes, setCurrentVideoLikes] = useState("");
    let [currentVideoDesc, setCurrentVideoDesc] = useState("There is no description provided to this video");
    let [currentVideoNotes, setCurrentVideoNotes] = useState("");
    let [currentVideoChannelPhoto, setCurrentVideoChannelPhoto] = useState("");
    let [currentSno, setCurrentSno] = useState("");

    let [searchQuery, setSearchQuery] = useState("");

    let [notificationMsg, setNotificationMsg] = useState("logged in successfully :)");


    // for user profile
    let [userProfilePhotoLink, setUserProfilePhotoLink] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [uploadCount, setUploadCount] = useState("");
    let [seenCount, setSeenCount] = useState("");
    let [bookmarkCount, setBookmarkCount] = useState("");
    let [dateJoined, setDateJoined] = useState("");
    
    const backendApi = "http://127.0.0.1:8000";

    const state = {
        "setUserEmail": setUserEmail,
        "userEmail": userEmail,
        "roomMessages": roomMessages,
        "setRoomMessages": setRoomMessages,
        "videoFeedData": videoFeedData,
        "setVideoFeedData": setVideoFeedData,

        //for video watch section data
        "currentVideoLink": currentVideoLink,
        "setCurrentVideoLink": setCurrentVideoLink,

        "currentVideoTitle": currentVideoTitle,
        "setCurrentVideoTitle": setCurrentVideoTitle,

        "currentVideoChannelName": currentVideoChannelName,
        "setCurrentVideoChannelName": setCurrentVideoChannelName,

        "currentVideoDesc": currentVideoDesc,
        "setCurrentVideoDesc": setCurrentVideoDesc,

        "currentVideoLikes": currentVideoLikes,
        "setCurrentVideoLikes": setCurrentVideoLikes,

        "currentVideoNotes": currentVideoNotes,
        "setCurrentVideoNotes": setCurrentVideoNotes,

        "currentVideoChannelPhoto": currentVideoChannelPhoto,
        "setCurrentVideoChannelPhoto": setCurrentVideoChannelPhoto,

        "currentSno": currentSno,
        "setCurrentSno": setCurrentSno,


        //Backend API 
        "backendApi": backendApi,

        //search Query
        "searchQuery": searchQuery,
        "setSearchQuery": setSearchQuery,

        //notification message
        "notificationMsg": notificationMsg,
        "setNotificationMsg": setNotificationMsg,

        //user profile photo
        "userProfilePhotoLink":userProfilePhotoLink,
        "setUserProfilePhotoLink":setUserProfilePhotoLink,

        "firstName":firstName,
        "setFirstName":setFirstName,

        "lastName":lastName,
        "setLastName":setLastName,

        "uploadCount":uploadCount,
        "setUploadCount":setUploadCount,

        "seenCount":seenCount,
        "setSeenCount":setSeenCount,

        "bookmarkCount":bookmarkCount,
        "setBookmarkCount":setBookmarkCount,

        "dateJoined":dateJoined,
        "setDateJoined":setDateJoined
    }
    


    return (
        <UserDataContext.Provider value={state}>
            {props.children}
        </UserDataContext.Provider>
    )
}
export default UserDataState;
