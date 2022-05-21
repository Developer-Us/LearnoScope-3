import React from 'react'
import UserDataContext from '../Context/UserData/UserDataContext';
import { useContext } from 'react';

export default function ReminderCard() {
    const userData = useContext(UserDataContext);

    const handleReminderSetting = () => {

        if (document.getElementById('5m').checked) {
            console.log("5m");
            remindAsync(userData.currentSno, "5m");
            alert("You'll be reminded on whatsapp after 5 minutes to watch the video named : \"" + userData.currentVideoTitle + "\"");
            document.getElementById("Application-logo").click();
        }
        else if (document.getElementById('10m').checked) {
            console.log("10m");
            remindAsync(userData.currentSno, "10m");
            alert("You'll be reminded on whatsapp after 5 minutes");
            document.getElementById("Application-logo").click();
        }
        else if (document.getElementById('15m').checked) {
            console.log("15m");
            document.getElementById("Application-logo").click();
            alert("You'll be reminded on whatsapp after 5 minutes");
            remindAsync(userData.currentSno, "15m");
        }
        else if (document.getElementById('1h').checked) {
            console.log("1h");
            document.getElementById("Application-logo").click();
            alert("You'll be reminded on whatsapp after 5 minutes");
            remindAsync(userData.currentSno, "1h");
        }
        else if (document.getElementById('2h').checked) {
            console.log("2h");
            document.getElementById("Application-logo").click();
            alert("You'll be reminded on whatsapp after 5 minutes");
            remindAsync(userData.currentSno, "2h");
        }

    }

    async function remindAsync(sno, timeOfReminder) {
        let responseObject = {
            "sno": sno,
            "email": localStorage.getItem("userEmail"),
            "timeOfReminder": timeOfReminder
        }

        await fetch(`${userData.backendApi}/reminder/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(responseObject),
        }).then(response => response.json()).then((data) => {
            if (data.status === 200) {
            }
            else {
            }
        })
    }

    return (
        <div id="ReminderCard" className="card shadow  bg-body rounded" style={{ "width": "18rem", "maxHeight": "340px", display: "none" }}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input id="5m" className="form-check-input mt-0" name="reminderRadio" type="radio" value="" defaultChecked />
                        </div>
                        <span className='mx-2'>5 minutes Later</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input id="10m" className="form-check-input mt-0" name="reminderRadio" type="radio" value="" />
                        </div>
                        <span className='mx-2'>10 minutes Later</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input id="15m" className="form-check-input mt-0" name="reminderRadio" type="radio" value="" />
                        </div>
                        <span className='mx-2'>15 minutes Later</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input id="1h" className="form-check-input mt-0" name="reminderRadio" type="radio" value="" />
                        </div>
                        <span className='mx-2'>1 hour Later</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input id="2h" className="form-check-input mt-0" name="reminderRadio" type="radio" value="" />
                        </div>
                        <span className='mx-2'>2 hours Later</span>
                    </div>
                </li>
            </ul>
            <div className="text-center my-3" style={{ height: "fitContent" }}>
                <button onClick={handleReminderSetting} className="btn btn-primary">Set Reminder</button>
            </div>
        </div>
    )
}
