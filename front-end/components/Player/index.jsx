import React from "react";
import Button from "../Button";
import Play from "../Play";
import "./Player.css";

function Player(props) {
  const {
    albumCover,
    className,
    button1Props,
    button2Props,
    playProps,
    button3Props,
    button4Props,
    button5Props,
    button6Props,
    button7Props,
  } = props;

  return (
    <div className={`player-2 ${className || ""}`}>
      <div className="border-top-1"></div>
      <div className="flex-row-2">
        <div className="left-controls-1">
          <div className="song-info-1">
            <img className="album-cover-1" src={albumCover} alt="Album cover" />
            <div className="title-author-1">
              <div className="in-my-feelings-1 inter-medium-white-18-7px">In My Feelings</div>
              <div className="name-11 inter-normal-pale-sky-16px">Drake</div>
            </div>
          </div>
          <img className="icon-heart-5" src="/img/heart@2x.svg" alt="icon-heart" />
        </div>
        <div className="player-3">
          <div className="controls-1">
            <Button className={button1Props.className} />
            <Button className={button2Props.className} />
            <Play className={playProps.className} />
            <Button className={button3Props.className} />
            <Button className={button4Props.className} />
          </div>
          <div className="timeline-2 inter-normal-pale-sky-16px">
            <div className="text-1">2:49</div>
            <div className="timeline-3">
              <div className="completed-1"></div>
            </div>
            <div className="text-2-1">3:37</div>
          </div>
        </div>
        <div className="right-controls-1">
          <Button className={button5Props.className} />
          <Button className={button6Props.className} />
          <Button className={button7Props.className} />
          <div className="volume-1">
            <div className="filled-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
