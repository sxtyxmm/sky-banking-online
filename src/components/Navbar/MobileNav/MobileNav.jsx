import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MobileNav.module.css";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const MobileNav = (props) => {
  const mediaQuery = window.matchMedia("(min-width:1044px)");
  const navHandler = (e) => {
    if (e.matches) {
      props.setBody(true);
      props.setMobileNav(false);
    }
  };
  mediaQuery.addListener(navHandler);
  navHandler(mediaQuery);

  return (
    <div
      onClick={() => {
        props.setBody(true);
        props.setMobileNav(false);
      }}
      className={classes.MobileNav}
    >
      <div className={classes.top}>
        <h1>SKY</h1>
        <FontAwesomeIcon
          onClick={() => {
            props.setBody(true);
            props.setMobileNav(false);
          }}
          size="2x"
          icon={faTimes}
          className={classes.times}
        />
      </div>

      <div className={classes.main}>
        <div className={classes.btn}>
          <a
            href="https://sky-bank-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Button text="Sign up" />
          </a>

          <Button text="Business" />
        </div>

        <div className={classes.topLinks}>
          <div className={classes.topLinksLeft}>
            <p className={classes.topLinksHead}>Features</p>
            <p>Sky Card</p>
            <p>Spend</p>
            <p>Save</p>
            <p>Budget</p>
            <p>Borrow</p>
          </div>
          <div className={classes.topLinksRight}>
            <p className={classes.topLinksHead}>Company</p>
            <p>Blog</p>
            <p>Press</p>
            <p>Join Our Team</p>
            <Link to="/about">
              <p>About Us</p>
            </Link>
          </div>
        </div>

        <div className={classes.lastLink}>
          <p className={classes.topLinksHead}>Help</p>
          <p>Get Help</p>
          <p>FAQs</p>
          <p>Security</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
