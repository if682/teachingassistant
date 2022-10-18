import React, { useState } from "react";
import "./playlistMusics.css";

import AddMusicModal from "../AddMusicModal/addMusicModal";

import optionsButton from "./assets/optionsButton.svg";
import downloadButton from "./assets/downloadButton.svg";
import likeButton from "./assets/likeButton.svg";
import removeButton from "./assets/removeButton.svg";
import defaultMusicImage from "./assets/defaultMusicImage.png";
import { s3 } from "../../config/aws";
import axiosInstance from "../common/server";
import { useEffect } from "react";

function PlaylistMusics(props) {
  const {playlistName, followersNumber, playlistOwner, playlistMusics, playlistID, playlistImage, playlistCategory, selectedPlaylist } = props

  let optionsFlag = 0;
  const [musicArray, setMusicArray] = useState(props.playlistMusics);
  const [bdMusics, setBDMusics] = useState(null);
  const [selectedMusicArray, setSelectedMusicArray] = useState(
    new Array(props.playlistMusics.length).fill(1)
  );
  const [sent, setSent] = useState(false);

  useEffect(() => {
    async function run (){
      setMusicArray(props.playlistMusics);
      setSelectedMusicArray(new Array(props.playlistMusics.length).fill(1));
      await addMusics();
    };
    run()
  }, [props.playlistMusics]);

  function removefromMusicArray(index) {
    let val = selectedMusicArray;
    val[index] = 1 - val[index];
    setSelectedMusicArray(val);
    console.log(val);
  }

  function removeMusicsPlaylist() {
    const newMusicArray = musicArray.filter(
      (el, index) => selectedMusicArray[index] === 1
    );
    return newMusicArray;
  }

  async function addMusics() {
    async function fetchMusics() {
      const response = await axiosInstance({
        method: "post",
        url: `/listMusics`,
        headers: {},
      });
      let val = await response.data;
      return val;
    }

    const musicsArray = await fetchMusics();
    setBDMusics(musicsArray);
  }

  function showOptions(index) {
    if (optionsFlag) {
      document.querySelector(`.musicPopup${index}`).style.display = "none";
      document.querySelector(".darkOverlay").style.display = "none";

      document.querySelector(`.musicPopup${index}`).style.zIndex = "initial";
      document.querySelector(
        `.playlistMusics-music-options${index}`
      ).style.zIndex = "initial";
      document.querySelector(".darkOverlay").style.zIndex = "initial";

      optionsFlag = 0;
    } else {
      document.querySelector(`.musicPopup${index}`).style.display = "flex";
      document.querySelector(".darkOverlay").style.display = "block";

      document.querySelector(`.musicPopup${index}`).style.zIndex = "3";
      document.querySelector(
        `.playlistMusics-music-options${index}`
      ).style.zIndex = "3";
      document.querySelector(".darkOverlay").style.zIndex = "2";

      optionsFlag = 1;
    }
  }

  function cancelRemoveMusics() {
    document.querySelectorAll(".playlistMusics-music").forEach((music) => {
      music.lastElementChild.style.display = "flex";
      music.lastElementChild.previousSibling.style.display = "none";
    });

    document
      .querySelectorAll(".playlistMusics-music-removeCheckbox")
      .forEach((checkboxDiv) => {
        checkboxDiv.firstElementChild.checked = false;
      });

    document.querySelector(
      ".playlistMusics-removeAllMusicsButton"
    ).style.display = "none";
  }

  function selectAllMusics() {
    document
      .querySelectorAll(".playlistMusics-music-removeCheckbox")
      .forEach((checkboxDiv) => {
        checkboxDiv.firstElementChild.checked = true;
      });
  }

  function showRemoveMusicModal() {
    let val = removeMusicsPlaylist();
    console.log(val);
    if (val.length !== musicArray.length) {
      props.setSelection(val);
      document.querySelector(".removeMusicModalDiv").style.display = "block";
    }
  }

  function showAddMusicsModal() {
    document.querySelector(".addMusicModalDiv").style.display = "block";
  }

  if (props.playlistMusics.length === 0) {
    return (
      <div className="playlistMusics-main">
        <div className="addMusicModalDiv">
          <AddMusicModal dataBaseMusics={bdMusics} playlistName={playlistName} followersNumber={followersNumber} playlistOwner={playlistOwner} playlistMusics={playlistMusics} playlistID={playlistID} playlistImage={playlistImage} playlistCategory={playlistCategory} selectedPlaylist={selectedPlaylist}/>
        </div>
        <div className="playlistMusics-noMusicDiv">
          <p onClick={showAddMusicsModal}>Adicionar música</p>
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
                  <img
                    src={music.image ? music.image : defaultMusicImage}
                    alt=""
                  />
                  <div className="playlistMusics-music-infos-names">
                    <p className="playlistMusics-music-musicName">
                      {music.name}
                    </p>
                    <p className="playlistMusics-music-text">{music.owner}</p>
                  </div>
                </div>
                <p className="playlistMusics-music-text playlistMusics-music-album">
                  {music.album}
                </p>
                <p className="playlistMusics-music-text playlistMusics-music-release">
                  {music.releaseDate}
                </p>
                <p className="playlistMusics-music-text playlistMusics-music-duration">
                  {music.duration}
                </p>
                <div className="playlistMusics-music-removeCheckbox">
                  <input
                    type="checkbox"
                    value={index}
                    onChange={(event) =>
                      removefromMusicArray(event.target.value)
                    }
                    id={`removeCheckbox${index}`}
                  />
                </div>
                <div
                  className={`playlistMusics-music-options playlistMusics-music-options${index}`}
                >
                  <img
                    src={optionsButton}
                    alt=""
                    onClick={() => showOptions(index)}
                  />
                  <div
                    className={`playlistMusics-music-optionsPopup musicPopup${index}`}
                  >
                    <p>
                      <img src={likeButton} alt="" />
                      Curtir
                    </p>
                    <p>
                      <img src={downloadButton} alt="" />
                      Baixar
                    </p>
                    <p onClick={showRemoveMusicModal}>
                      <img src={removeButton} alt="" />
                      Remover
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="playlistMusics-removeAllMusicsButton">
            <p onClick={selectAllMusics}>Selecionar todas</p>
            <p onClick={showRemoveMusicModal}>Remover</p>
            <p onClick={cancelRemoveMusics}>Cancelar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistMusics;
