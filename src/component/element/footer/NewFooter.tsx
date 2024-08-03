import React from "react";
import classes from "./newFooter.module.css";

const NewFooter = () => {

  return (

    <div className={classes.main}>
    <div className={classes.Wrapper}>
      <div className={classes.Wrapper_info}>
        <div className={classes.Wrapper_info_name}>
          <p>E-cyclables</p>
          <p className={classes.Wrapper_info_last}>E-Cycleables@gmail.com</p>
        </div>
        <div className={classes.Wrapper_info_Address}>
          <p>Address</p> 
          <p>700 Royal Ave, New Westminster, BC V3M 5Z5</p>
        </div>
      </div>

      <div className={classes.product}>
        <h3>Product</h3>
        <p>Waste Removal</p>
        <p>Resusable Assets</p>
        <p>Junk disposal</p>
        <p>Renovation</p>
      </div>

      <div className={classes.product}>
        <h3>Team</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>FAQs</p>
        <p>Blog</p>
      </div>

      <div className={classes.product}>
        <h3>Socials</h3>
        <p>Twitter</p>
        <p>Linkdlin</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>

      <div className={classes.product}>
        <h3>Legal</h3>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Licenses</p>
      </div>
      </div>


      <hr className={classes.line} />

      <p className={classes.final}>© 2023 E-Cycleables. All rights reserved.</p>

      </div>
      
  );
};

export default NewFooter;
