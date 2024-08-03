import React, { Fragment, useEffect, useState } from "react";
import classes from "./LandingPage.module.css"
import main from "../../assets/images/main.jpg"
import check from "../../assets/images/check.svg"
import medal from "../../assets/images/medal.svg"
import eco from "../../assets/images/eco.svg"
import service from "../../assets/images/service.svg"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();


    return(
        <div className={classes.Wrapper}>
            <div className={classes.Banner}>
                <p className={classes.Banner_Header}>Junk Removal Solutions Clear the Clutter, Reclaim Your Space</p>
                <p className={classes.Banner_Text}>We specialize in fast, reliable junk removal services designed to make your life easier. Whether you're dealing with old furniture, broken appliances, yard waste.</p>
                <div className={classes.wrapper_Button}>
                    <button  onClick={() => navigate("/bookings")} className={classes.wrapper_Button_join}>Book Now</button>
                    <button onClick={() => navigate("/services")} className={classes.wrapper_Button_see}>See how it works</button>

                </div>
            </div>
            <div className={classes.MainContent}>
                <div className={classes.MainContent_div}>
                    <img width="100%"  src={main} alt="main img" />
                    <div className={classes.MainContent_section}>
                        <h3>Why Choose E-Cycleables ?</h3>
                        <p>Are you tired of looking at piles of unwanted items cluttering your home or office? Our expert team at [Company Name] is here to help! We specialize in fast, reliable junk removal services designed to make your life easier. Whether you're dealing with old furniture, broken appliances or yard waste, we handle it all with care and efficiency.</p>
                    </div>
                </div>
                <div className={classes.MainContent_center}>
                    <div className={classes.MainContent_center_div}>
                        <button className={classes.MainContent_center_button}>What we Offer</button>
                        <p className={classes.Standout}>What makes us standout from others?</p>
                    </div>
                    <div className={classes.MainContent_center_box}>
                        <div className={classes.MainContent_center_box_content}>
                            <div className={classes.MainContent_card}>
                                <img  src={check} alt="" />
                                <p  className={classes.MainContent_card_heading}>Fast and Reliable Service:</p>
                                <p  className={classes.MainContent_card_text}>We understand that your time is valuable. Our team works quickly to remove your junk, often offering same-day or next-day service to ensure your space is cleared as soon as possible.</p>
                            </div>

                            <div className={classes.MainContent_card}>
                                <img src={medal} alt="" />
                                <p  className={classes.MainContent_card_heading}>Professional and Courteous Staff :</p>
                                <p  className={classes.MainContent_card_text}>Our experienced professionals treat your property with the utmost respect. We arrive on time, in uniform, and with all the necessary equipment to get the job done right.</p>
                            </div>
                        </div>

                        <div className={classes.MainContent_center_box_content_2}>
                            <div className={classes.MainContent_card}>
                                <img src={eco} alt="" />
                                <p  className={classes.MainContent_card_heading}>Fast and Reliable Service:</p>
                                <p  className={classes.MainContent_card_text}>We understand that your time is valuable. Our team works quickly to remove your junk, often offering same-day or next-day service to ensure your space is cleared as soon as possible.</p>
                            </div>

                            <div className={classes.MainContent_card}>
                                <img src={service} alt="" />
                                <p  className={classes.MainContent_card_heading}>Professional and Courteous Staff :</p>
                                <p  className={classes.MainContent_card_text}>Our experienced professionals treat your property with the utmost respect. We arrive on time, in uniform, and with all the necessary equipment to get the job done right.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.Reclaim_div}>
                <div className={classes.Reclaim}>
                    <p className={classes.Reclaim_heading}>Ready to reclaim your space? </p>
                    <p className={classes.Reclaim_text}> Contact us today to schedule your junk removal service. Click the button below to get a free, no-obligation quote and see how easy it can be to clear out the clutter!</p>
                    <button className={classes.Reclaim_button}>Join us now</button>
                </div>
            </div>
        </div>
    )
}


export default LandingPage;