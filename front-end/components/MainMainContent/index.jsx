import React from "react";
import "./MainMainContent.css";

function MainMainContent(props) {
  const { podcasts, rectangle239, className } = props;

  return (
    <div className={`main-main-content ${className || ""}`}>
      <div className="podcasts-1 roboto-bold-white-20px">{podcasts}</div>
      <img className="rectangle-239" src={rectangle239} alt="Rectangle 239" />
    </div>
  );
}

export default MainMainContent;
