import React from 'react'
import style from "./signup.module.css"

export const Signup = () => {
  return (
    <div className={style.body}>
        
        <div className={style.mainSignupBox}>
            <div className={style.img}><img src='https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg' className={style.img}/></div>
            <div className={style.upperPart}>
                <h3>Sign Up to view your profile</h3>
                <div><p>Country</p></div>
                <div className={style.PhoneNumDiv}>
                    <h3><span>IN</span>+91</h3>
                    <input type="tel" placeholder='Phone Number' className={style.TelInp}/>
                </div>
                <div><button className={style.SendOTP}>Send OTP</button></div>
            </div>
        
            <div className={style.lowerPart}>
                <div>By continuing, you agree to Meesho’s</div>
                <div><span className={style.textColor}>Terms & Conditions</span> and <span className={style.textColor}>Privacy Policy</span></div>
            </div>
        </div>
    </div>
  )
}
