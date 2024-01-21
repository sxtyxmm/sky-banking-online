import React from "react";
import Button from "../Button/Button";
import classes from "./Footer.module.css";
import firstImage from "../../Assets/We-are-the-bank.svg";
import apple from "./images/apple-btn.svg";
import google from "./images/google-btn.svg";

const Footer = () => {
  return (
    <footer>
      <section className={classes.sectionOne}>
        <div className={classes.getSky}>
          <div className={classes.getSkyLeft}>
            <h1>
              Get the app now, dump <br /> bank fees for good.
            </h1>
            <p>
              It only takes a few minutes to start enjoying free benefits.
              <br />
              Download Sky on Google Play or the App Store.
            </p>
            <small>Fully Licensed By CBN Deposite Insured By NDIC</small>
            <Button text="Get Sky" />
          </div>

          <div className={classes.getSkyRight}>
            <img src={firstImage} alt="" />
          </div>
        </div>
      </section>

      <section className={classes.sectionTwo}>
        <div className={classes.sectionTwoLogo}>
          <h1>SKY</h1>
        </div>
        <div className={classes.sectionTwoLink}>
          <div className={classes.sectionTwoLink1}>
            <div>
              <h4 className={classes.linkHead}>Features</h4>
              <p>Sky Card</p>
              <p>Spend</p>
              <p>Save</p>
              <p>Budget</p>
              <p>Borrow</p>
            </div>
            <div>
              <h4 className={classes.linkHead}>Company</h4>
              <p>Blog</p>
              <p>Press</p>
              <p>Join Our Team</p>
              <p>About Us</p>
            </div>
          </div>

          <div className={classes.sectionTwoLink2}>
            <div>
              <h4 className={classes.linkHead}>Help</h4>
              <p>Get Help</p>
              <p>FAQs</p>
              <p>Security</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h4 className={classes.linkHead}>Transparency</h4>
              <p>{"Terms & Conditions"}</p>
              <p>Privacy Policy</p>
              <p>Information Security Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.sectionThree}>
        <div className={classes.downloadBtn}>
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
        <div className={classes.productsVary}>
          <p>Products may vary by country or market.</p>
        </div>
        <div className={classes.contact}>
          <div>
            <h4>Contact</h4>
            <p>help@sky.com</p>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className={classes.location}>
          <div>
            <h4>Enugu</h4>
            <p>
              151 Herbert Macaulay Way, <br /> Yaba, Enugu, <br /> Nigeria
            </p>
          </div>
          <div>
            <h4>London</h4>
            <p>
              91 Wimpole Street, London <br /> W1G 0EF <br /> UK
            </p>
          </div>
          </div>
        </div>
        <div className={classes.finalPara}>
          <div>
            <small>
              *Sky Customers get 25 free transfer to other banks every month.
              Extra transfers to other banks cost ₦10 each. <br />
              **Sky account holders can deposit money in over 10,000 branches
              across Nigeria for free.
            </small>
          </div>
          <div>
            <small>
              © 2022 Sky Microfinance Bank (RC796975). All rights reserved. All
              deposits are insured by the Nigerian Deposit Insurance Corporation
              (NDIC). Sky Microfinance Bank is licensed by the <br /> Central
              Bank of Nigeria. “Sky” and “Skybank” are trademarks of Sky
              Technologies Ltd Lagos: 151 Herbert Macaulay Way, Yaba, Lagos.
              London: 91 Wimpole Street, London W1G 0EF, UK
            </small>
          </div>
          <div>
            <small>
              Sky Current Account is provided through Sky Microfinance Bank. All
              text, graphics, audio files, code, downloadable material, and
              other works on this website are the copyrighted works of <br />{" "}
              Sky Microfinance Bank. All Rights Reserved. Any unauthorized
              redistribution or reproduction of any copyrighted materials on
              this website is strictly prohibited. Other product and company{" "}
              <br />
              names are trademarks of their respective owners. This website
              contains simulated images; actual appearance may vary.
            </small>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
