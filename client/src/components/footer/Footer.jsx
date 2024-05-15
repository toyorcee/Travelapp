import React from "react";
import classes from "./footer.module.css";
import facebook from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Contacts</h2>
          <div className={classes.linkimg} style={{display: "flex", margin: "10px"}}>
            <p>
              <a href="https://instagram.com/teecrane_" target="_blank">
                <img src={instagram} alt=""  style={{height: "40px", width: "40px"}} />
              </a>
            </p>
            <p>
              <a
                href="https://facebook.com/olaniyan.segunnasri"
                target="_blank"
              >
                <img src={facebook} alt=""  style={{height: "40px", width: "40px"}} />
              </a>
            </p>
            <p>
              <a href="https://twitter.com/toyosicrane" target="_blank">
                <img src={twitter} alt=""  style={{height: "40px", width: "40px"}} />
              </a>
            </p>
          </div>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Privacy policy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            facere error fuga, molestiae cumque.
          </p>
        </div>
      </div>
      <hr  className={classes.hr} />
      <p className={classes.footerp} style={{textAlign: "center", fontSize: "large"}}>All rights reserved by <span  style={{color: "#F72798"}}>toyorcee.</span> @2024</p>
    </footer>
  );
};

export default Footer;
