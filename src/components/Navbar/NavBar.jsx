import React from "react";
import Button from "../Button/Button";
import classes from "./NavBar.module.css";
import niger from "./images/nigeria-flag-icon.svg";
import { Link } from "react-router-dom";

import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faHamburger,
  faMoneyBill,
  faPaperPlane,
  faPiggyBank,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import OverLay from "../../OverLay";

const NavBar = (props) => {
  const bodyOverlay = props.showFeatures || props.showCompany || props.showHelp;

  return (
    <>
      {bodyOverlay && <OverLay />}

      <nav>
        <div
          style={{
            backgroundColor: bodyOverlay ? "rgba(0, 0, 0, 0.9)" : "",
          }}
          className={classes.nav}
        >
          <div className={classes.left}>
            <Link to="/">
              <h1>Sky</h1>
            </Link>

            <div className={classes.links}>
              <div
                onMouseEnter={() => props.setShowFeatures(true)}
                onMouseLeave={() => props.setShowFeatures(false)}
                className={classes.popupContainer}
              >
                <p
                  style={{ color: bodyOverlay ? "white" : "" }}
                  className={classes.singleLink}
                >
                  Features{" "}
                  <span>
                    <FontAwesomeIcon
                      className={classes.arrow}
                      icon={faTriangleExclamation}
                    />
                  </span>
                </p>

                {props.showFeatures && (
                  <div
                    style={{ animation: "zoomIn", animationDuration: ".5s" }}
                  >
                    <p>
                      <span className={classes.span}>
                        <FontAwesomeIcon color="#e78651" icon={faCreditCard} />
                      </span>
                      Sky Card
                    </p>
                    <p>
                      {" "}
                      <span className={classes.span}>
                        <FontAwesomeIcon color="#e78651" icon={faPaperPlane} />
                      </span>
                      Spend
                    </p>
                    <p>
                      {" "}
                      <span className={classes.span}>
                        <FontAwesomeIcon color="#e78651" icon={faPiggyBank} />
                      </span>
                      Save
                    </p>
                    <p>
                      {" "}
                      <span className={classes.span}>
                        <FontAwesomeIcon color="#e78651" icon={faChartPie} />
                      </span>
                      Budget
                    </p>
                    <p>
                      {" "}
                      <span className={classes.span}>
                        <FontAwesomeIcon color="#e78651" icon={faMoneyBill} />
                      </span>
                      Borrow
                    </p>
                  </div>
                )}
              </div>

              <p>Business</p>

              <div
                onMouseEnter={() => props.setShowComapany(true)}
                onMouseLeave={() => props.setShowComapany(false)}
                className={classes.popupContainer}
              >
                <p
                  style={{ color: bodyOverlay ? "white" : "" }}
                  className={classes.singleLink}
                >
                  Company{" "}
                  <span>
                    <FontAwesomeIcon
                      className={classes.arrow}
                      icon={faTriangleExclamation}
                    />
                  </span>
                </p>
                {props.showCompany && (
                  <div
                    style={{ animation: "zoomIn", animationDuration: ".5s" }}
                  >
                    <p>Blog</p>
                    <p>Press</p>
                    <p>Join Our Team</p>
                    <p>
                      <Link to="/about">About Us</Link>
                    </p>
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => props.setShowHelp(true)}
                onMouseLeave={() => props.setShowHelp(false)}
                className={classes.popupContainer}
              >
                <p
                  style={{ color: bodyOverlay ? "white" : "" }}
                  className={classes.singleLink}
                >
                  Help{" "}
                  <span>
                    <FontAwesomeIcon
                      className={classes.arrow}
                      icon={faTriangleExclamation}
                    />
                  </span>
                </p>
                {props.showHelp && (
                  <div
                    style={{ animation: "zoomIn", animationDuration: ".5s" }}
                  >
                    <p>Get Help</p>
                    <p>FAQs</p>
                    <p>Security</p>
                    <p>Contact Us</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={classes.right}>
            <a
              href="https://sky-bank-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <p>Sign in</p>
            </a>

            <a
            href="https://sky-bank-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Button text="Sign up" />
          </a>
           
            <img className={classes.countryIcon} src={niger} alt="Nigeria" />
            <FontAwesomeIcon
              onClick={() => {
                props.setBody(false);
                props.setMobileNav(true);
              }}
              className={classes.hambuger}
              icon={faHamburger}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
