import React from "react";
import classes from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={classes.btn}>{text}</button>;
};

export default Button;
