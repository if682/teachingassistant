import React from "react";
import Player from "../Player";
import "./Group173.css";

function Group173(props) {
  const { playerProps } = props;

  return (
    <div className="group-173">
      <Player {...playerProps} />
    </div>
  );
}

export default Group173;
