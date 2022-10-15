import React from "react";
import "./playlistMusics.css";

import optionsButton from "./assets/optionsButton.svg"
import defaultMusicImage from "./assets/defaultMusicImage.png"

function PlaylistMusics(props) {
  if (props.playlistMusics.length === 0) {
    return (
      <div className="playlistMusics-main">
        <div className="playlistMusics-noMusicDiv">
          <p>Adicionar música</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playlistMusics-main">
        <div className="playlistMusics-hasMusicDiv">
          {props.playlistMusics.map((music, index) => {
            return (
              <div className="playlistMusics-music">
                <p className="playlistMusics-music-index">{index + 1}</p>
                <div className="playlistMusics-music-infos">
                  <img src={music.image ? music.image : defaultMusicImage} alt="" />
                  <div className="playlistMusics-music-infos-names">
                    <p className="playlistMusics-music-musicName">{music.name}</p>
                    <p className="playlistMusics-music-text">{music.owner}</p>
                  </div>
                </div>
                <p className="playlistMusics-music-text playlistMusics-music-album">{music.album}</p>
                <p className="playlistMusics-music-text playlistMusics-music-release">{music.releaseDate}</p>
                <p className="playlistMusics-music-text playlistMusics-music-duration">{music.duration}</p>
                <img src={optionsButton} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlaylistMusics;
