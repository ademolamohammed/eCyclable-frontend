import axios from "axios";
import React, { useState } from "react";
import loginbg from "../../assets/images/loginbg.svg";

import classes from "./auth.module.css";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { Message } from "rsuite";
import { useNavigate } from "react-router-dom";


const Auth = () => {

    const navigate = useNavigate();


    const config = {
        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
          "Access-Control-Allow-Origin": "*",
      
        },
      };

  const [siginin,setSignin] = useState(true)
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [signupLoading, setSignupLoading] = useState<boolean>(false);
  const [placement, setPlacement] = React.useState('topCenter');

//   const message = (
//     <Message showIcon type={type} closable>
//       <strong>{type}!</strong> The message appears on the {placement}.
//     </Message>
//   );



  const handleLogin = async (data: { username: string; password: string }) => {
    setLoginLoading(true)
    try{
        const val = 
            {
                "email": data.username,
                "password": data.password
              }
        console.log(val);
        
        
        const res: any = await axios.post('http://localhost:8000/auth/login', val, config);
        if(res?.data?.success){
            navigate("/otp");
        }
    }catch(error:any){
        setLoginLoading(false)

        console.log(error.response.data.message);
          alert(error?.response?.data?.message
            ? error?.response?.data?.message
            : "Error occured,Kindly try again");

    }      //   toaster.push(message, { placement, duration: 5000 })    }
        
  };

  const handleSignup = async(val:any) => {

    setLoginLoading(true)
    try{

        const data={
            ...val,
            fullname:"full name",
            dialcode:"+1",
            hospitalId:"+1",
            roleId:"999000"
        }
                
        const res: any = await axios.post('http://localhost:8000/auth/register', data, config);
        if(res?.data?.success){
            alert("Kindly login to continue");
            setSignin(true)
        }
    }catch(error:any){
        setLoginLoading(false)

        console.log(error.response.data.message);
          alert(error?.response?.data?.message
            ? error?.response?.data?.message
            : "Error occured,Kindly try again");

    } 
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.first}>
            <div style={{textAlign:'center'}}>
            <p className={classes.cyclables}> E-cyclables</p>
          <p className={classes.welcome}>Welcome back!</p>
          <p className={classes.logins}>Enter your login details</p>

            </div>
         

          <div className={classes.tabs}>
                <div style={{backgroundColor:siginin?'rgba(255, 255, 255, 1)':'',borderRadius:'1rem'}} onClick={() => setSignin(true)} className={classes.signin}>Sign in</div>
                <div style={{backgroundColor:!siginin?'rgba(255, 255, 255, 1)':'',borderRadius:'1rem'}} onClick={() => setSignin(false)}  className={classes.signup}>Sign up</div>

          </div>

          {
            siginin ? 
            
            <>
                <SignIn
                         handleSignin={(val: any) => handleLogin(val)}
                         signinLoading={loginLoading}
                />
            </>
            :
            <div className={classes.scroll}>
                <SignUp
                        handleSignup={(val: any) => handleSignup(val)}
                        signupLoading={signupLoading}
                />
            </div>
          }
        </div>
        

        <div className={classes.second}>
          <img className={classes.blur} src={loginbg} />
        </div>
      </div>
    </>
  );
};

export default Auth;
