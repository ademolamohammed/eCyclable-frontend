import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './header.module.css'

const Header= () => {

    const navigate = useNavigate();

  return (
    <>
      <div className={classes.Wrapper}>
        <h2>E-Cycleables</h2>
        <div className={classes.Header_Nav}>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li
              className="position-relative"
            >
              About us
            </li>
            <li
              className="position-relative"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="position-relative"
            >
              Products
            </li>
          </ul>
        </div>



        <nav className="navbar navbar-expand-lg navbar-light bg-light ml-auto">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
    </div>
  </div>
</nav>




        <div onClick={() => navigate("/auth")} className={classes.Header_Contact}>
            <p>Sigin in/Sign up</p>
        </div>
      </div>
    </>
  );
};

export default Header;
