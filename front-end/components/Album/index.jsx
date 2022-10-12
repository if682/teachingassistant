import React from "react";
import "./Album.css";

function Album(props) {
  const { className } = props;

  return <div className={`album ${className || ""}`}></div>;
}

export default Album;
