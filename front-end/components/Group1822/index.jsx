import React from "react";
import "./Group1822.css";

function Group1822(props) {
  const { justinBieber, className } = props;

  return (
    <div className={`group-1822-1 roboto-normal-white-10px ${className || ""}`}>
      <div className="justin-bieber">{justinBieber}</div>
      <div className="rectangle-573"></div>
      <div className="song">Song</div>
    </div>
  );
}

export default Group1822;
