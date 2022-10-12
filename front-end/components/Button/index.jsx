import React from "react";
import "./Button.css";

function Button(props) {
  const { className } = props;

  return (
    <div className={`button ${className || ""}`}>
      <img className="switch-horizontal" src="/img/switch-horizontal@2x.svg" alt="Switch horizontal" />
    </div>
  );
}

export default Button;
