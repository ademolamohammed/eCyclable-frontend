import { Formik } from "formik";
import React, { useState } from "react";
import loginbg from "../../assets/images/loginbg.svg";
import * as yup from 'yup'

import classes from "./auth.module.css";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { Input } from "../../component/element/form/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {

    const navigate = useNavigate();

  const [siginin,setSignin] = useState(true)
  const [otpLoading, setOtpLoading] = useState<boolean>(false);
  const [signupLoading, setSignupLoading] = useState<boolean>(false);

  const initial = {
    otp:'',
    email:''
  }

const schemas = yup.object({
    otp:yup.string().required(),
    email:yup.string().required(),
})

const config = {
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json",
      "Access-Control-Allow-Origin": "*",
  
    },
  };


  const handleSignin = async(val:any) => {

    try{
        setOtpLoading(true)
        const email= {
            email:val.email
        }
        
        const res: any = await axios.post(`http://localhost:8000/auth/login/otp/${val.otp}`, email, config);
        if(res?.data?.success){
            setOtpLoading(false)
            navigate("/dashboard/account");
        }
    }catch(error:any){
        // setLoginLoading(false)
        setOtpLoading(false)
        console.log(error);
          alert(error?.response?.data?.message
            ? error?.response?.data?.message
            : "Error occured,Kindly try again");

    }      //   toaster.push(message, { placement, duration: 5000 })    }
        
  }

  

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.first}>
            <div style={{textAlign:'center'}}>
            <p className={classes.cyclables}> E-cyclables</p>
          <p className={classes.welcome}>Enter the code</p>
          <p className={classes.logins}>Enter the OTP code that we sent to your email</p>

            </div>
         

          <div className={classes.tabs2}>
          <div className={classes.FormContainer}>
        <Formik
            validationSchema={schemas}
            enableReinitialize={true}
            validateOnChange={true}
            initialValues={initial}
            onSubmit={(data:any) => {
              handleSignin(data)
            }}
        >
         {({ values, errors, handleChange, isValid, isInitialValid, isSubmitting, handleSubmit}) => (
        <>      
          <form onSubmit={handleSubmit} className={classes.FormStyle}>
            <div style={{margin:'5rem'}}>
            <Input
              name="otp"
              type="text"
              label="Code *"
              className="px-5 mt-5"
            />

            <Input
              name="email"
              type="text"
              label="Email *"
              className="px-5 mt-5"
            />
            </div>
          

            <div className={classes.ButtonContent}>
              <button className={classes.SigninButton} type="submit">{otpLoading?'Loading...':'Submit'}</button>
            </div>
          </form>
        </>
      )}
    </Formik>
    </div>
          </div>
        </div>

        <div className={classes.second}>
          <img src={loginbg} />
        </div>
      </div>
    </>
  );
};

export default Otp;
