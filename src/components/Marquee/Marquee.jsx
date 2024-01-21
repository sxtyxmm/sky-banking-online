import React from "react";
import classes from "./Marquee.module.css";
import maleAvatar from "../../Assets/male-avatar.svg";

const testimonies = [
  {
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to the customer service",
    name: "Mu'azu Muhammad Kudu",
  },
  {
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @SkyBank is sleek",
    name: "Babajide Duroshola",
  },
  {
    text: "I like the fact that Sky Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!",
    name: "Ugochukwu Miracle",
  },
  {
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to the customer service",
    name: "Mu'azu Muhammad Kudu",
  },
  {
    text: "I highly recommend this app, it does what it says The bank of the free. I have received my Sky card. it does what it says The bank of the free",
    name: "Ifeanyichukwu Obaji",
  },
  {
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @SkyBank is sleek my everyday way to bank and have access to physical cash",
    name: "Babajide Duroshola",
  },
  {
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to the customer service",
    name: "Mu'azu Muhammad Kudu",
  },
  {
    text: "I highly recommend this app, it does what it says The bank of the free. I have received my Sky card. it does what it says The bank of the free",
    name: "Ifeanyichukwu Obaji",
  },
  {
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to the customer service",
    name: "Mu'azu Muhammad Kudu",
  },
  {
    text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!",
    name: "RealSOK_",
  },
];

const Moving = ({ name, text }) => {
  return (
    <div className={classes.moving}>
      <p>{text}</p>
      <div>
        <img src={maleAvatar} alt="" />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

const Marquee = () => {
  return testimonies.map((testi) => (
    <Moving text={testi.text} key={Math.random()} name={testi.name} />
  ));
};

export default Marquee;
