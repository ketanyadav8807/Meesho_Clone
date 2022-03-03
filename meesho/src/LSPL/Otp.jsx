import React, { useEffect, useState } from 'react'
import style from "./signup.module.css"

export const Otp = () => {
    const [otp, setOtp] = useState("");

    useEffect(() => {
       setOtp(Math.floor(100000 + Math.random() * 900000))
    }, [])

    if(otp){
        alert(otp);
    }

  return (
    <div className={style.body}>
        
    <div className={style.mainSignupBox}>
        <div className={style.img}><img src='https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg' className={style.img}/></div>
        <div className={style.upperPart}>
            <h3>Enter OTP sent to 8808702180</h3>
            <div><h4 className={style.textColor}>CHANGE NUMBER</h4></div>
            <div>
                <input type="tel" placeholder='Phone Number' />
            </div>
            <div><h4 className={style.textColor}>RESEND OTP</h4></div>
            <div><button className={style.SendOTP}>Verify</button></div>
        </div>
    
        <div className={style.lowerPart}>
            <div>By continuing, you agree to Meesho’s</div>
            <div><span className={style.textColor}>Terms & Conditions</span> and <span className={style.textColor}>Privacy Policy</span></div>
        </div>
    </div>
</div>
  )
}
