import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import style from "./signup.module.css"
import {Clear} from '@material-ui/icons';
import {IconButton} from "@mui/material"
import { useNavigate } from "react-router-dom"
export const Signup = () => {

    const navigate = useNavigate()

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
        }
        else{
            alert("Invalid Phone Number")
        }
    
    }

  return (
    <div className={style.body}>
        <div className={style.title}>
            <IconButton onClick={() => navigate("/home")}><Clear style={{fontSize: 26 , color: "#666362"}} /></IconButton>
            <img src={require("../images/meeshoLogo.png")} alt="" style={{width: 100,height: 30, marginLeft: "3px", marginTop: "5px" }}/>
        </div>
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
    </div>
  )
}
