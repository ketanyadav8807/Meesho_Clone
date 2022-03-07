import React, { useContext, useEffect, useState } from 'react'
import style from '../CSS/signup.module.css'
import OtpInput from 'react-otp-input'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider'
import { useSnackbar } from 'react-simple-snackbar'
export const Otp = () => {
  const navigate = useNavigate()
  const { result, getToken } = useContext(AuthContext)
  const [otpInp, setOtpInp] = useState('')

  const options = {
    position: 'top-center',
    style: {
      backgroundColor: '#2e7d32',
      border: '2px solid #2e7d32',
      color: 'white',
      borderRadius: '15px',
      fontSize: '20px',
      textAlign: 'center',
    },
    closeStyle: {
      fontSize: '16px',
    },
  }

  const [openSnackbar, closeSnackbar] = useSnackbar(options)

  const handleChange = (otpin) => {
    setOtpInp(otpin)
  }

  useEffect(() => {}, [])

  const handleVerify = () => {
    if (otpInp.length === 6) {
      result
        .confirm(otpInp)
        .then((result) => {
          // User signed in successfully.
          console.log(result)
          openSnackbar('Logged in successfully!')
          navigate('/checkout/cart')
          const user = result.user
          console.log(user.uid)
          localStorage.setItem('userToken', JSON.stringify(user.uid))
          getToken()
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error)
          window.location.reload()
        })
    }
  }

  return (
    <div className={style.body}>
      <div className={style.mainSignupBox}>
        <div className={style.img}>
          <img
            src="https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg"
            className={style.img}
          />
        </div>
        <div className={style.upperPart}>
          <div>
            <h4 className={style.ChangeNum}>CHANGE NUMBER</h4>
          </div>

          <OtpInput
            value={otpInp}
            onChange={handleChange}
            numInputs={6}
            inputStyle={{
              width: '45px',
              outline: 'none',
              border: 'none',
              borderBottom: '1.5px solid grey',
              marginRight: '10px',
              marginTop: '65px',
              fontSize: '17px',
              fontWeight: '550',
              lineHeight: '40px',
            }}
          />
          <div>
            <button className={style.SendOTP} onClick={() => handleVerify()}>
              Verify
            </button>
          </div>
        </div>

        <div className={style.lowerPart}>
          <div className={style.lowerPartLow}>
            By continuing, you agree to Meesho’s
          </div>
          <div className={style.lowerPartLoww}>
            <span className={style.textColor}>Terms & Conditions</span> and{' '}
            <span className={style.textColor}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}
