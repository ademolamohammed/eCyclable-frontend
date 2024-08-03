import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import classes from "./tabs.module.css";
import account from "../../../assets/account.png";
import book from "../../../assets/book.png";
import { Nav } from "rsuite";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";

interface ITab {
  accountInfo: () => void;
  addressBook: () => void;
  order: () => void;
  measurement: () => void;
  // transaction: () => void
}


const Tab = ({ accountInfo, addressBook, order, measurement }: ITab) => {
  const location = useLocation()

  const path = location.pathname.split("/")[2]

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });


  const handleAccountInfo = () => {
    accountInfo();
  };

  const handleAddress = () => {
    addressBook();
  };

  const handleOrder = () => {
    order();
  };

  const handleMeasurement = () => {
    measurement();
  };

  // const handleTransaction = () => {
  //     transaction()
  //     setActive(false)
  // }
  
  

  return (
    <>
      <div className={`${classes.Menu}`}>
        <div style={{ height: "inherit" }}>
          <p className={classes.Menu_Head}>Account Dashboard</p>

          <div
            onClick={() => {
              handleAccountInfo();
            }}
            style={{
              color: path == "account" ? "white" : "",
              backgroundColor: path == "account" ? "black" : "",
              borderRadius: path == "account" ? "10px" : "",
            }}
            className={classes.Menu__li}
          >
            <span style={{ marginLeft: "3.3rem" }} className="d-flex">
              <i
                className="fas fa-user"
                style={{
                  width: "10px",
                  alignSelf: "center",
                  marginRight: "1.71rem",
                }}
              ></i>
              <p className={`${classes.Menu_Text} p-0 m-0`}>
                {" "}
                Account Information{" "}
              </p>
            </span>
          </div>

          <div
            onClick={() => {
              handleAddress();
            }}
            className={classes.Menu__li}
            id="book"
            style={{
              color: path == "finance" ? "white" : "",
              backgroundColor: path == "finance" ? "black" : "",
              borderRadius: path == "finance" ? "10px" : "",
            }}
          >
            <span style={{ marginLeft: "3.3rem" }} className={classes.dan}>
              <i
                className="fa fa-dollar-sign"
                style={{
                  width: "10px",
                  alignSelf: "center",
                  marginRight: "1.71rem",
                }}
              ></i>
              <p className={`${classes.Menu_Text} p-0 m-0`}> Finance </p>
            </span>
          </div>

          <div
            onClick={() => {
              handleOrder();
            }}
            className={classes.Menu__li}
            id="order"
            style={{
              color: path == "history" ? "white" : "",
              backgroundColor: path == "history" ? "black" : "",
              borderRadius: path == "history" ? "10px" : "",
            }}
          >
            <span style={{ marginLeft: "3.3rem" }} className="d-flex">
              <i
                style={{
                  width: "10px",
                  alignSelf: "center",
                  marginRight: "1.71rem",
                }}
                className="fas fa-book"
              ></i>
              <p className={`${classes.Menu_Text} p-0 m-0`}> History </p>
            </span>
          </div>


          <div
            onClick={() => {
              handleMeasurement();
            }}
            className={classes.Menu__li}
            id="measurement"
            style={{
              color: path == "messaging" ? "white" : "",
              backgroundColor: path == "messaging" ? "black" : "",
              borderRadius: path == "messaging" ? "10px" : "",
            }}
          >
            <span style={{ marginLeft: "3.3rem" }} className="d-flex">
              <i
                style={{
                  width: "10px",
                  alignSelf: "center",
                  marginRight: "1.71rem",
                }}
                className="fa-solid fa-tape"
              ></i>
              <p className={`${classes.Menu_Text} p-0 m-0`}> Messaging </p>
            </span>
          </div>
          {/* <a onClick={() => handleTransaction()} className={classes.Menu__li}  href="#transactions" id="transactions">
                    <span style={{marginLeft:'3.3rem'}} className='d-flex'>
                        <i  style={{width:'10px',alignSelf:'center',marginRight:'1.71rem'}} className="fa-solid fa-credit-card"></i>
                        <p className={`${classes.Menu_Text} p-0 m-0`}> cards & transactions </p>
                    </span>
                </a> */}
        </div>
        {/* <div className='m-auto'>
                    <span className='d-flex'>
                        <i style={{width:'10px',alignSelf:'center',marginRight:'1.71rem'}} className="fa fa-arrow-right-from-bracket"></i>
                        <p style={{fontSize:'1.6rem'}} className={`${classes.Menu_Text} p-0 m-0`}> SIGN OUT </p>
                    </span>
                </div> */}
      </div>

      <div className={classes.Container_first}>
        <Nav className="yoo" ref={ref} appearance="subtle">
          <Nav.Item
            className="john"
            onClick={() => {
              handleAccountInfo();
            }}
            active={path == "account" ? true : false}
          >
            Account information
          </Nav.Item>
          <Nav.Item
            className="john"
            onClick={() => {
              handleAddress();
            }}
            active={path == "addressBook" ? true : false}
          >
            Address book
          </Nav.Item>
          <Nav.Item
            className="john"
            onClick={() => {
              handleOrder();
            }}
            active={path == "orders" ? true : false}
          >
            My order
          </Nav.Item>
          <Nav.Item
            className="john"
            onClick={() => {
              handleMeasurement();
            }}
            active={path == "measurements" ? true : false}
          >
            Measurement
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Tab;
