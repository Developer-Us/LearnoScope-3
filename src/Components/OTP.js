// 

import React, { useContext } from "react";
import "../Styles/OTP.css";
import UserDataContext from '../Context/UserData/UserDataContext';
export default function OTP() {
  // var mail = "amit@mail.com";
  // display user mail 
  const userData = useContext(UserDataContext);
  document.addEventListener("DOMContentLoaded", function (event) {
    function OTPInput() {
      const inputs = document.querySelectorAll("#otp > *[id]");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    }
    OTPInput();
    // logical code to move cursor to forward input box in OTP section
  });
  async function chkOtp() {
    var str = "";
    str += document.getElementById('first').value;
    str += document.getElementById('second').value;
    str += document.getElementById('third').value;
    str += document.getElementById('fourth').value;
    str += document.getElementById('fifth').value;

    let userObject = {
      "email":userData.userEmail,
      "otp":parseInt(str)
    }
    await fetch(`${userData.backendApi}/verifyEmail/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    }).then(response => response.json()).then((data) => {
      console.log(data.status);
      alert(data.response);
      // if (data.status !== 200) {
      //   alert("Sorry!!! You entered wrong OTP :( ")
      // }
      //document.getElementById('divinLogin').click()
    })

  }

  return (
    <>
      <div className="Otp_Section container h-100 d-flex mx-auto my-auto">
        <div className="otp_card shadow-lg card p-2 text-center mx-auto">
          <h4 className="otp_head">Please enter the one time password to verify your account</h4>
          <span>A code has been sent to <span className="email_id">{localStorage.getItem("signupEmail")}</span></span>
          <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
            {/* inp m-2 text-center form-control rounded */}
            <input className="inp text-center form-control rounded" id="first" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
            <input className="inp text-center form-control rounded" id="second" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
            <input className="inp text-center form-control rounded" id="third" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
            <input className="inp text-center form-control rounded" id="fourth" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
            <input className="inp text-center form-control rounded" id="fifth" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
            {" "}

          </div>

          <div className="mt-4">
            {" "}
            <button onClick={chkOtp} className="btn px-4 validate">Validate</button>
          </div>
        </div>
      </div>
    </>
  );
}