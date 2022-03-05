import React, { useEffect, useState} from 'react'
import style from "./signup.module.css"
import OtpInput from "react-otp-input";
import {KeyboardArrowLeft} from '@material-ui/icons';
import {IconButton} from "@mui/material"
import { useNavigate } from "react-router-dom"
export const Otp = () => {

    const navigate = useNavigate()

    const [otpInp, setotpInp] = useState("")
  const handleChange = (otpIn) => {
      setotpInp(otpIn);
  }
  

    const otp = Math.floor(100000 + Math.random() * 900000);
    const [num, setNum] = useState("");
    const [time, setTime] = useState(60);

    useEffect(() => {
       fetch("https://meesho-db.herokuapp.com/User")
       .then((res)=> res.json())
       .then((res)=> setNum(res[0].Num))

    //    setTimeout(() => {
    //     if(otp){
    //         alert(`Your OTP is . . . ${otp}`)
    //        }
    //    }, 1000);

        const interval =  setInterval(() => {
            setTime((prev)=>{
                if(prev > 0){
                    return prev-1;
                }
                else{
                    clearInterval(interval);
                    return prev;
                }
            })
            }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])

    
  return (
    <div className={style.body}>
        <div className={style.title}>
        <IconButton onClick={() => navigate(-1)}><KeyboardArrowLeft style={{fontSize: 28, color: "#666362"}} /></IconButton>
            <img src={require("../images/meeshoLogo.png")} alt="" style={{width: 100, height: 30, marginLeft: "3px", marginTop: "5px" }}/>
        </div>
        <div className={style.mainSignupBox}>
            <div className={style.img}>
                <img src='https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg' className={style.img}/>
            </div>
            <div className={style.upperPart}>
                <h3 className={style.EnterOtpTo}>Enter OTP sent to {num}</h3>
                <div><h4 className={style.ChangeNum}>CHANGE NUMBER</h4></div>

                <OtpInput
                    value={otpInp}
                    onChange={handleChange}
                    numInputs={6}
                    inputStyle={{width: "45px", outline: "none" , border: "none" , borderBottom: "1.5px solid grey", marginRight: "10px", marginTop: "65px", fontSize: "17px", fontWeight: "550", lineHeight: "40px"}}
                />

                
                <div className={style.time}>{time > 0 ? `Resend OTP in ${time} s` : ""}</div>
                <div><h4 className={style.ChangeNumm}>{time === 0 ? "RESEND OTP" : ""}</h4></div>
                <div><button className={style.SendOTP}>Verify</button></div>
            </div>
        
            <div className={style.lowerPart}>
                <div className={style.lowerPartLow}>By continuing, you agree to Meesho’s</div>
                <div className={style.lowerPartLoww}><span className={style.textColor}>Terms & Conditions</span> and <span className={style.textColor}>Privacy Policy</span></div>
            </div>
        </div>
    </div>
  )
}
