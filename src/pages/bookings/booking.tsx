import axios from "axios";
import React, { useState } from "react";
import loginbg from "../../assets/images/loginbg.svg";
import Booking from "../auth/booking";

import classes from "./booking.module.css";

const BookingMain = () => {

  const [siginin,setSignin] = useState(true)
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [signupLoading, setSignupLoading] = useState<boolean>(false);
    const [junk,setJunk] = useState("")

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json",
      "Access-Control-Allow-Origin": "*",
  
    },
  };

console.log(junk);


  const handleLogin = async (data:any) => {

    try{
        console.log(data);

        const val = {
            ...data,
            hospitalId:"hello",
            roleId:"role",
            password:"1234"
        }
        
        
        
        const res: any = await axios.post('http://localhost:8000/booking', val, config);
        if(res?.data?.success){
           alert('booking successful')
        }
    }catch(error:any){
        setLoginLoading(false)

        console.log(error.response.data.message);
          alert(error?.response?.data?.message
            ? error?.response?.data?.message
            : "Error occured,Kindly try again");

    }  
  };

  const handleSignup = (val:any) => {

  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.first}>
            <div style={{textAlign:'center'}}>
            <p className={classes.cyclables}> E-cyclables</p>
          {/* <p className={classes.welcome}>Welcome back!</p> */}
          <p className={classes.logins}>Enter your details to book a visit</p>

            </div>
            
            <div className={classes.bookings}>
                <Booking
                         handleSignin={(val: any) => handleLogin(val)}
                         signinLoading={loginLoading}
                         setJunk={(val:any) => setJunk(val)}
                />
            </div>
        </div>

        <div className={classes.second}>
          <img className={classes.blur} src={loginbg} />
        </div>
      </div>
    </>
  );
};

export default BookingMain;
