
import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import style from "../CSS/signup.module.css"
import { useNavigate } from "react-router-dom";
import { authentication } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import { AuthContext } from '../Contexts/AuthProvider';

  export const Signup = () => {
  const navigate = useNavigate();
  const [phoneNum, setPhoneNum] = useState("");
  const {setResult} = useContext(AuthContext)

  // window.recaptchaVerifier = await new RecaptchaVerifier('sign-in-button', {
  //   'size': 'invisible',
  //   'callback': (response) => {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     // onSignInSubmit()
  //   },
  //   defaultCountry:"IN"
  // }, authentication);
  // let appVerifier = window.recaptchaVerifier;
  // signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
  // .then(confirmationResult => {
  //   console.log(confirmationResult);
  // }).catch((error) => {
  //   console.log(error)
  //   window.recaptchaVerifier.clear()

    const getRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit()
          console.log(response)
        }
      }, authentication);
    }

    const sendOtp = () => {
         if(phoneNum.length === 10){
          let phoneNumber = `+91${phoneNum}`
          console.log(phoneNumber)
          getRecaptcha();  
          let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then(confirmationResult => {
          setResult(confirmationResult)
          navigate("/auth/otp")
        }).catch((error) => {
          console.log(error)
        })
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
                <div id="sign-in-button"></div>   
                <div><button className={style.SendOTP} onClick={()=> sendOtp()}>Send OTP</button></div>

            </div>
        
            <div className={style.lowerPart}>
                <div className={style.lowerPartLow}>By continuing, you agree to Meesho’s</div>
                <div className={style.lowerPartLoww}><span className={style.textColor}>Terms & Conditions</span> and <span className={style.textColor}>Privacy Policy</span></div>
            </div>

        </div>
      </div>
  );
 }
