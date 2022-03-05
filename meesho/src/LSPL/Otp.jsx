import React, { useEffect, useState } from 'react'
import style from "../CSS/signup.module.css"

export const Otp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const [num, setNum] = useState("");
    const [time, setTime] = useState(60);

    useEffect(() => {
       fetch("https://meesho-db.herokuapp.com/User")
       .then((res)=> res.json())
       .then((res)=> setNum(res[0].Num))

       setTimeout(() => {
        if(otp){
            alert(`Your OTP is . . . ${otp}`)
           }
       }, 1000);

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
        <div className={style.mainSignupBox}>
            <div className={style.img}>
                <img src='https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg' className={style.img}/>
            </div>
            <div className={style.upperPart}>
                <h3 className={style.EnterOtpTo}>Enter OTP sent to {num}</h3>
                <div><h4 className={style.ChangeNum}>CHANGE NUMBER</h4></div>

                <div className={style.mainOtpField}>
                    <input type="tel" className={style.otpField} />
                    <input type="tel" className={style.otpField} />
                    <input type="tel" className={style.otpField} />
                    <input type="tel" className={style.otpField} />
                    <input type="tel" className={style.otpField} />
                    <input type="tel" className={style.otpField} />
                </div>
                
                <div className={style.time}>{time > 0 ? `Resend OTP in ${time} s` : ""}</div>
                <div><h4 className={style.ChangeNumm}>{time === 0 ? "RESEND OTP" : ""}</h4></div>
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
