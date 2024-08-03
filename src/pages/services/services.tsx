import React from "react";
import classes from "./service.module.css";
import staff from "../../assets/images/staff.jpg";
import driver from "../../assets/images/driver.jpg";
import lady from "../../assets/images/lady.jpg";
import construction from "../../assets/images/construction.jpg";
import tes1 from "../../assets/images/tes1.svg";
import tes2 from "../../assets/images/tes2.svg";
import sam from "../../assets/images/sam.svg";
import dan from "../../assets/images/dan.svg";


const Service = () => {
  return (
    <>
      <div className={classes.Wrapper}>
        <p className={classes.our}>Our service</p>
        <p className={classes.long}>
          At E-Cycleables we offer a range of junk removal services tailored to
          meet your needs.
        </p>

        <div className={classes.imagewrap}>
          <img className={classes.imageS} src={staff} alt="" />
          <div className={classes.who}>
            <p>Who we are</p>
            <p className={classes.serviceLong}>
              From old furniture to unwanted appliances, we help you declutter
              your home quickly and responsibly. Our team ensures that all items
              are removed safely and disposed of in an eco-friendly manner.{" "}
              <br />
              Efficient and discreet junk removal for offices, retail spaces,
              and other commercial properties. We handle everything from office
              furniture to electronics, ensuring minimal disruption to your
              business operations."
            </p>
          </div>
        </div>

        <div className={classes.bodyWrapper}>
          <div className={classes.MainContent_div}>
            <img width="100%" src={driver} alt="main img" />
            <div className={classes.MainContent_section}>
              <h3>Residential Junk Removal</h3>
              <p>
                Residential Junk Removal" Description: "From old furniture to
                unwanted appliances, we help you declutter your home quickly and
                responsibly. Our team ensures that all items are removed safely
                and disposed of in an eco-friendly manner
              </p>
            </div>
          </div>

          <div className={classes.MainContent_div}>
            <div className={classes.MainContent_section}>
              <h3>Commercial Junk Removal</h3>
              <p>
                Efficient and discreet junk removal for offices, retail spaces,
                and other commercial properties. We handle everything from
                office furniture to electronics, ensuring minimal disruption to
                your business operations.
              </p>
            </div>
            <img width="100%" src={lady} alt="main img" />
          </div>

          <div className={classes.MainContent_div}>
            <img width="100%" src={construction} alt="main img" />
            <div className={classes.MainContent_section}>
              <h3>Construction Debris Removal</h3>
              <p>
                Safe and thorough removal of construction and renovation debris,
                keeping your project site clean and safe. We handle materials
                like wood, concrete, and metal, ensuring proper disposal and
                recycling.
              </p>
            </div>
          </div>


          <div className={classes.MainContent_center}>
                    <div className={classes.MainContent_center_div}>
                        <p className={classes.MainContent_center_button}>Testimonials</p>
                        <p className={classes.Standout}>Here are some of our customer’s latest testimonies.</p>
                    </div>
                    <div className={classes.MainContent_center_box}>
                        <div className={classes.MainContent_center_box_content}>
                            <div className={classes.MainContent_card}>
                                <img src={tes1} alt="" />
                                <p  className={classes.MainContent_card_text}>I appreciate their eco-friendly approach. They recycled and donated as much as possible, and the whole process was smooth and hassle-free. Excellent service</p>
                            </div>

                            <div className={classes.MainContent_card}>
                                <img src={tes2} alt="" />
                                <p  className={classes.MainContent_card_text}>I was amazed at how efficiently they cleared out my office space. The team was respectful and handled everything with care. Will definitely use them again.</p>
                            </div>
                        </div>

                        <div className={classes.MainContent_center_box_content_2}>
                            <div className={classes.MainContent_card}>
                                <img src={sam} alt="" />
                                <p  className={classes.MainContent_card_text}>The team did a fantastic job with our construction site cleanup. They were prompt, thorough, and ensured all debris was removed safely. Great value for money.</p>
                            </div>

                            <div className={classes.MainContent_card}>
                                <img src={dan} alt="" />
                                <p  className={classes.MainContent_card_text}>I was amazed at how efficiently they cleared out my office space. The team was respectful and handled everything with care. Will definitely use them again.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
};

export default Service;
