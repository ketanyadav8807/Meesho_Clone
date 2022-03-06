
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import style from "../CSS/signup.module.css"
import { useNavigate } from "react-router-dom";


  export const Signup = () => {
  const navigate = useNavigate();
  const [phoneNum, setPhoneNum] = useState("");

    const sendPhoneNum = (phoneNum) =>{
        if(phoneNum.length === 10){
            const data = {
                "Num": phoneNum,
            }
            fetch("https://meesho-db.herokuapp.com/User",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(r => {
              console.log(r.json())
              navigate("/auth/otp")
            })
        }
        else{
            alert("Invalid Phone Number")
        }
    
    }

  return (
    <div className={style.body}>
        <div className={style.mainSignupBox}>
            <div className={style.img}><img src='https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg' className={style.img}/></div>
            <div className={style.upperPart}>
                <h3>Sign Up to view your profile</h3>
                <div className={style.Country}>Country</div>

                <div className={style.PhoneNumDiv}>
                    <h4 className={style.h4IN}><span className={style.IN}>IN</span>+91</h4>
                    <TextField id="standard-basic" label="Phone Number" onChange={(e)=> setPhoneNum(e.currentTarget.value)} className={style.tests}/>
                </div>

                <div><button className={style.SendOTP} onClick={()=> sendPhoneNum(phoneNum)}>Send OTP</button></div>
            </div>
        
            <div className={style.lowerPart}>
                <div className={style.lowerPartLow}>By continuing, you agree to Meesho’s</div>
                <div className={style.lowerPartLoww}><span className={style.textColor}>Terms & Conditions</span> and <span className={style.textColor}>Privacy Policy</span></div>
            </div>

        </div>
        {/* <div className={style.upperPart}>
          <h3>Sign Up to view your profile</h3>
          <div>
            <p>Country</p>
          </div>
          <div className={style.PhoneNumDiv}>
            <h3>
              <span>IN</span>+91
            </h3>
            <input
              type="tel"
              placeholder="Phone Number"
              className={style.TelInp}
            />
          </div>
          <div>
            <button className={style.SendOTP} onClick={() => navigate("/Otp")}>
              Send OTP
            </button>
          </div>
        </div>

        <div className={style.lowerPart}>
          <div>By continuing, you agree to Meesho’s</div>
          <div>
            <span className={style.textColor}>Terms & Conditions</span> and{" "}
            <span className={style.textColor}>Privacy Policy</span>
          </div>
        </div> */}
      </div>
  );
 }
