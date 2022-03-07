import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../CSS/Footer.css";
import "../Resp-css/Footer-Resp.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="firstSection">
        <div className="heading">
          <p className="headingTitle">Shop Non-Stop on Meesho</p>
          <div className="subTitleView">
            <p className="subTitle">
              Trusted by more than 1 Crore Indians <br /> Cash on Delivery |
              Free Delivery
            </p>
          </div>
          <div className="download">
            <img
              src="https://meesho.com/_next/static/images/google-play-button-1f2aa747a3eefa161840b04e057b31ac.png"
              alt=""
            />
            <img
              src="https://meesho.com/_next/static/images/appstore-button-4b171cf04fe0557718dfd2cbf309c61d.png"
              alt=""
            />
          </div>
        </div>
        <div className="career">
          <div className="firstCareerView">
            <p className="content">Careers</p>
            <p className="subContent">Become a supplier</p>
          </div>
          <div className="secondCareerView">
            <p className="content">Legal and Polices</p>
            <p className="subContent">Meesho Tech Blog</p>
          </div>
        </div>
        <div className="contact">
          <p className="contactTitle">Contact Us</p>
          <p className="subContent">query@meesho.com</p>
        </div>
        <div className="reachOut">
          <p className="contactTitle">Reach out to us</p>
          <div className="contactIcons">
            <img
              src="https://meesho.com/assets/facebook.png"
              alt=""
              onClick={() => (window.location.href = "https://www.facebook.com")}
            />
            <img
              src="https://meesho.com/assets/instagram.png"
              alt=""
              onClick={() => (window.location.href = "https://www.instagram.com")}
            />
            <img
              src="https://meesho.com/assets/youtube.png"
              alt=""
              onClick={() => (window.location.href = "https://www.youtube.com")}
            />
            <img
              src="https://meesho.com/assets/linkedin.png"
              alt=""
              onClick={() => (window.location.href = "https://www.linkedin.com/")}
            />
            <img
              src="https://meesho.com/assets/twitter.png"
              alt=""
              onClick={() => (window.location.href = "https://www.twitter.com")}
            />
          </div>
        </div>
      </div>
      <div className="accordion">
        <Accordion>
          <AccordionSummary
            className="accordionSum"
            expandIcon={
              <ExpandMoreIcon style={{ fontSize: 45, color: "#666666" }} />
            }
          >
            More Details
          </AccordionSummary>
          <AccordionDetails className="accordionDet">
            <p>Thank you for clicking</p>
            <p>Thank you for clicking</p>
            <p>Thank you for clicking</p>
            <p>Thank you for clicking</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Footer;
