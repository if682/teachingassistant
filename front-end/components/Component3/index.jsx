import React from "react";
import Album from "../Album";
import "./Component3.css";

function Component3(props) {
  const { albumProps } = props;

  return (
    <div className="component-3">
      <div className="overlap-group-4">
        <Album className={albumProps.className} />
        <div className="rectangle-289"></div>
      </div>
    </div>
  );
}

export default Component3;
