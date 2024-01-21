import React from "react";
import classes from "./Home.module.css";

import firstImage from "../../Assets/We-are-the-bank.svg";
import secondImage from "../../Assets/Your-phone-plus-our-app.svg";
import thirdImage from "../../Assets/Its-your-money.svg";
import fourthImage from "../../Assets/Save-money-as-you.svg";
import fifthImage from "../../Assets/Turn-off-access.svg";
import sixthImage from "../../Assets/We-are-always-happy.svg";
import seventhImage from "../../Assets/Fees-as-clear.svg";

import bbc from "./images/bbc.svg";
import cnbc from "./images/cnbc.svg";
import euromoney from "./images/euromoney.svg";
import fintech from "./images/fintech.svg";
import tc from "./images/tc.svg";
import world from "./images/world.svg";

import valar from "./images/valar.svg";
import entree from "./images/entree.svg";
import sbi from "./images/sbi.svg";
import target from "./images/target.svg";
import visa from "./images/visa.svg";

import Button from "../Button/Button";
import Marquee from "../Marquee/Marquee";

import TinyIcon from "../TinyIcon/TinyIcon";
import {
  faCreditCard,
  faChartPie,
  faScaleBalanced,
  faPaperPlane,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className={classes.home}>
      {/* header section////////////////////////////////////////////////////// */}
      <header>
        <div className={classes.headerContainer}>
          <div className={classes.headerLeft}>
            <h1>
              We’re the bank <br /> of the free
            </h1>
            <p>
              We’re here to help you get the best out of <br /> your money, no
              strings attached. <br /> Welcome to your freedom!
            </p>
            <small>
              Fully Licensed By CBN Deposite Insured By <span>NDIC</span>
            </small>
            <a
              href="https://expo.dev/artifacts/eas/Zqy6KL4oBWkB4pmkn43Ew.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Download Android App" />
            </a>
          </div>

          <div className={classes.headerRight}>
            <img src={firstImage} alt="" />
          </div>
        </div>
      </header>

      <main>
        <section className={classes.sectionOne}>
          <div className={classes.sectionOneFirstContainer}>
            <div className={classes.sectionOneFirst}>
              <TinyIcon icon={<FontAwesomeIcon icon={faCreditCard} />} />
              <p>
                We’ll give you a free debit card. Order it right in the app.
              </p>
            </div>
            <div className={classes.sectionOneFirst}>
              <TinyIcon icon={<FontAwesomeIcon icon={faChartPie} />} />
              <p>
                Create smart budgets to help you take control of your spending.
              </p>
            </div>
            <div className={classes.sectionOneFirst}>
              <TinyIcon icon={<FontAwesomeIcon icon={faScaleBalanced} />} />
              <p>See where your money goes without solving equations.</p>
            </div>
          </div>

          <div className={classes.sectionOneSecondContainer}>
            <div className={classes.sectionOneSecond}>
              <TinyIcon icon={<FontAwesomeIcon icon={faPaperPlane} />} />
              <p>Pay absolutely nothing for sending money.</p>
            </div>
            <div className={classes.sectionOneSecond}>
              <TinyIcon icon={<FontAwesomeIcon icon={faPiggyBank} />} />
              <p>
                Save automatically and we’ll pay you up to 15% interest every
                year.
              </p>
            </div>
          </div>
        </section>

        <section className={classes.sectionTwo}>
          <div className={classes.sectionTwoLeft}>
            <h1>
              Your phone + <br /> our app + <br /> a debit card = <br /> a
              simpler life.
            </h1>
            <p>
              We designed a banking app for your busy <br /> lifestyle, and
              we’ll give you a free debit card to <br /> go with it. That’s all
              you need to make the right <br /> moves with your money, no sweat.
            </p>
            <small>Open An Account in Minutes</small>
          </div>
          <div className={classes.sectionTwoRight}>
            <img src={secondImage} alt="" />
          </div>
        </section>

        <section className={classes.sectionThree}>
          <div className={classes.sectionThreeLeft}>
            <img src={thirdImage} alt="" />
          </div>
          <div className={classes.sectionThreeRight}>
            <h1>
              It’s your money, we just <br /> help you manage it.
            </h1>
            <p>
              Save it, spend it, send it. It’s up to you. <br /> Whatever you
              choose to do with your money, <br /> we’ll make sure it’s done
              better and free of <br />
              charge. We take responsibility for that.
            </p>
          </div>
        </section>

        <section className={classes.sectionFour}>
          <div className={classes.sectionFourLeft}>
            <h1>
              Save money as you <br /> spend it, seriously.
            </h1>
            <p>
              You can’t avoid spending. That’s how you pay <br /> for your
              needs. But we can help you put money <br /> away every time you
              pay for something. Just <br /> set a percentage to save and watch
              your <br /> money grow.
            </p>
            <small>See all our Savings</small>
          </div>
          <div className={classes.sectionFourRight}>
            <img src={fourthImage} alt="" />
          </div>
        </section>

        <section className={classes.sectionFive}>
          <div className={classes.sectionFiveLeft}>
            <img src={fifthImage} alt="" />
          </div>
          <div className={classes.sectionFiveRight}>
            <h1>
              Turn off access, turn on <br /> safety.
            </h1>
            <p>
              Life happens. Milk spills. Debit cards go <br /> missing. If that
              ever happens, you can block <br /> your missing card on the app so
              no one can <br /> use it. We’d like to see them try.
            </p>
            <small>Learn more about Cards</small>
          </div>
        </section>

        <section className={classes.sectionSix}>
          <div className={classes.sectionSixLeft}>
            <h1>
              We’re always happy to <br /> help you.
            </h1>
            <p>
              You can chat with us on the app, slide into our <br /> DMs, tweet,
              leave an Instagram comment, <br /> send an email or call. However
              you choose to <br /> reach out, there’ll always be a friendly
              person <br />
              there to make your life easy.
            </p>
            <small>Get Help</small>
          </div>
          <div className={classes.sectionSixRight}>
            <img src={sixthImage} alt="" />
          </div>
        </section>

        <section className={classes.sectionSeven}>
          <div className={classes.sectionSevenLeft}>
            <img src={seventhImage} alt="" />
          </div>
          <div className={classes.sectionSevenRight}>
            <h1>Fees as clear as glass.</h1>
            <p>
              We’re serious about free banking, and we will <br /> never, ever
              charge you for anything without <br /> your consent.
            </p>
            <small>See all our fees</small>
          </div>
        </section>

        <section className={classes.sectionEight}>
          <h1>Don’t just take our word for it</h1>
          <div className={classes.testimonies}>
            <Marquee />
          </div>
          <div className={classes.brandLogo}>
            <img src={tc} alt="" />
            <img src={world} alt="" />
            <img src={fintech} alt="" />
            <img src={bbc} alt="" />
            <img src={cnbc} alt="" />
            <img src={euromoney} alt="" />
          </div>
        </section>

        <section className={classes.sectionNine}>
          <h1>Our Partners</h1>
          <div>
            <img src={valar} alt="" />
            <img src={entree} alt="" />
            <img src={sbi} alt="" />
            <img src={target} alt="" />
            <img src={visa} alt="" />
          </div>
        </section>

        <section className={classes.sectionTen}>
          <h1 className={classes.sectionTenHeader}>
            Choose the freedom you need.
          </h1>

          <div className={classes.freedom}>
            <div className={classes.freedomHead}>
              <h1 className={classes.space}>Space</h1>
              <h1>Other Banks</h1>
              <h1>SKY</h1>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Transfer Fee</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>Up to ₦50 plus V.A.T.</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>Up to ₦50 plus V.A.T.</p>
              </div>
              <div>
                <p>25 free transfers every month</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Debit Card</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>₦1,000 plus V.A.T</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>₦1,000 plus V.A.T</p>
              </div>
              <div>
                <p>Free</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Card Delivery</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>🤨</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>🤨</p>
              </div>
              <div>
                <p>Free</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Card Maintenance Fee</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>Up to ₦50 per quarter</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>Up to ₦50 per quarter</p>
              </div>
              <div>
                <p>Never</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Alerts</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>Charge for SMS alerts</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>Charge for SMS alerts</p>
              </div>
              <div>
                <p>Free instant notifications</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Annual Interest</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>4%</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>4%</p>
              </div>
              <div>
                <p>Up to 15%</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Bill Payment Fee</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>Up to ₦100 per bill</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>Up to ₦100 per bill</p>
              </div>
              <div>
                <p>No</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Instant Reversals</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>😒</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>😒</p>
              </div>
              <div>
                <p>Yes</p>
              </div>
            </div>

            <div className={classes.freedomChildWrapper}>
              <div className={classes.childHeadWrapper}>
                <p className={classes.childHead}>Account Maintenance Fee</p>
                {/* the p tag below is only displayed on mobile. */}
                <p className={classes.childMobile}>Yes</p>
              </div>
              {/* the div tag below is only displayed on large screens. */}
              <div className={classes.childDesktop}>
                <p>Yes</p>
              </div>
              <div>
                <p>Never</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
