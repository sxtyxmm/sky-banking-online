import React from "react";
import classes from "./TinyIcon.module.css";

const TinyIcon = ({ icon }) => {
  return <div className={classes.container}>{icon}</div>;
};

export default TinyIcon;
