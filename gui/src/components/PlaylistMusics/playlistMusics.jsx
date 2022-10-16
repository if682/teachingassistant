import React from "react";
import "./playlistMusics.css";

import optionsButton from "./assets/optionsButton.svg"
import downloadButton from "./assets/downloadButton.svg"
import likeButton from "./assets/likeButton.svg"
import removeButton from "./assets/removeButton.svg"
import defaultMusicImage from "./assets/defaultMusicImage.png"

function PlaylistMusics(props) {
  let optionsFlag = 0

  function showOptions(index){
      if(optionsFlag){
          document.querySelector(`.musicPopup${index}`).style.display = "none"
          document.querySelector(".darkOverlay").style.display = "none"
          optionsFlag = 0
      }else{
          document.querySelector(`.musicPopup${index}`).style.display = "flex"
          document.querySelector(".darkOverlay").style.display = "block"
          optionsFlag = 1
      }
  }

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
                <div className="playlistMusics-music-options">
                  <img src={optionsButton} alt="" onClick={() => showOptions(index)}/>
                  <div className={`playlistMusics-music-optionsPopup musicPopup${index}`}>
                      <p><img src={likeButton} alt=""/>Curtir</p>
                      <p><img src={downloadButton} alt=""/>Baixar</p>
                      <p><img src={removeButton} alt=""/>Remover</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      <div className="darkOverlay"></div>
      </div>
    );
  }
}

export default PlaylistMusics;
