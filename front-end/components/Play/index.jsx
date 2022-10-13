import React from "react";
import "./Play.css";

function Play(props) {
  const { className } = props;

  return <div className={`play-1 ${className || ""}`}></div>;
}

export default Play;
