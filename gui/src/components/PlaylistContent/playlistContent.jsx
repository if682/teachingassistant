import React from "react";
import "./playlistContent.css";

import RemoveModal from "../RemoveModal/removeModal";
import EditPlaylistModal from "../EditPlaylistModal/editPlaylistModal";
import FollowersListModal from "../FollowersListModal/followersListModal";

import heart from "./assets/followersHeart.svg";
import coloredHeart from "./assets/followersHeartColored.svg";
import playButton from "./assets/playButton.svg";
import followButton from "./assets/followButton.svg";
import downloadButton from "./assets/downloadButton.svg";
import optionsButton from "./assets/optionsButton.svg";
import editButton from "./assets/Edit.svg";
import removeMusicButton from "./assets/removeMusic.svg";
import removePlaylistButton from "./assets/removePlaylist.svg";
import shareButton from "./assets/share.svg";

import defaultImage from "./assets/defaultPlaylistImage.svg";

function PlaylistContent(props) {
  const {
    playlistName,
    followersNumber,
    playlistOwner,
    playlistDuration,
    playlistMusics,
    playlistID,
    playlistImage,
    playlistCategory,
    selectedPlaylist,
  } = props;

  let optionsFlag = 0;

  function closeOptions() {
    document.querySelector(
      ".playlistContent-buttons-optionsPopup"
    ).style.display = "none";
    document.querySelector(".darkOverlay").style.display = "none";

    document.querySelector(".playlistContent-buttons-options").style.zIndex =
      "initial";
    document.querySelector(
      ".playlistContent-buttons-optionsPopup"
    ).style.zIndex = "initial";
    document.querySelector(".darkOverlay").style.zIndex = "initial";

    document.querySelector(".playlistMusics-main").style.zIndex = "initial";

    optionsFlag = 0;
  }

  function openOptions() {
    document.querySelector(
      ".playlistContent-buttons-optionsPopup"
    ).style.display = "flex";
    document.querySelector(".darkOverlay").style.display = "block";

    document.querySelector(".playlistContent-buttons-options").style.zIndex =
      "3";
    document.querySelector(
      ".playlistContent-buttons-optionsPopup"
    ).style.zIndex = "3";
    document.querySelector(".darkOverlay").style.zIndex = "2";

    document.querySelector(".playlistMusics-main").style.zIndex = "0";
    optionsFlag = 1;
  }

  let isFollower = 0;
  function followPLaylist() {
    if (isFollower) {
      document
        .querySelectorAll(".playlistContent-followHeart")
        .forEach((heartImage) => {
          if (heartImage.firstElementChild != null) {
            heartImage.firstElementChild.src = followButton;
          } else {
            heartImage.src = followButton;
          }
        });
      isFollower = 0;
    } else {
      document
        .querySelectorAll(".playlistContent-followHeart")
        .forEach((heartImage) => {
          if (heartImage.firstElementChild != null) {
            heartImage.firstElementChild.src = coloredHeart;
          } else {
            heartImage.src = coloredHeart;
          }
        });
      isFollower = 1;
    }
    // Se a pessoa não seguir -> Começa a seguir e o coração fica colorido
    // Se a pessoa seguir -> Deixa de seguir e o coração fica escuro
  }

  function showOptions() {
    if (optionsFlag) {
      closeOptions();
    } else {
      openOptions();
    }
  }

  function removeMusics() {
    document.querySelectorAll(".playlistMusics-music").forEach((music) => {
      music.lastElementChild.style.display = "none";
      music.lastElementChild.previousSibling.style.display = "block";
    });
    closeOptions();
    document.querySelector(
      ".playlistMusics-removeAllMusicsButton"
    ).style.display = "flex";
  }

  function showRemovePlaylistModal() {
    document.querySelector(".removePlaylistModalDiv").style.display = "block";
  }

  function showEditPlaylistModal() {
    document.querySelector(".editPlaylistModalDiv").style.display = "block";
  }

  function showFollowersList() {
    document.querySelector(".followersListModalDiv").style.display = "block";
  }

  console.log("CONTENT:", props);
  return (
    <div className="playlistContent-main">
      <div className="removePlaylistModalDiv">
        <RemoveModal
          ID={playlistID}
          selectedPlaylist={selectedPlaylist}
          playlistName={playlistName}
          playlistImage={playlistImage}
          playlistCategory={playlistCategory}
          modalFlag="removePlaylist"
        />
      </div>
      <div className="removeMusicModalDiv">
        <RemoveModal
          ID={playlistID}
          selectedPlaylist={selectedPlaylist}
          playlistName={playlistName}
          playlistImage={playlistImage}
          playlistCategory={playlistCategory}
          modalFlag="removeMusic"
        />
      </div>
      <div className="editPlaylistModalDiv">
        <EditPlaylistModal
          playlistName={playlistName}
          followersNumber={followersNumber}
          playlistOwner={playlistOwner}
          playlistMusics={playlistMusics}
          playlistID={playlistID}
          playlistImage={playlistImage}
          playlistCategory={playlistCategory}
        />
      </div>
      <div className="followersListModalDiv">
        <FollowersListModal />
      </div>
      <div
        className="playlistContent-image"
        style={
          playlistImage
            ? {
                backgroundImage: `url(${playlistImage})`,
                backgroundPosition: "center",
              }
            : { backgroundImage: `url(${defaultImage})` }
        }
      >
        <p style={{ cursor: "pointer" }} onClick={showFollowersList}>
          <img src={heart} alt="Followers heart" />
          {followersNumber}
        </p>
      </div>
      <p className="playlistContent-name">{playlistName}</p>
      <div className="playlistContent-infos">
        <p>{playlistOwner}</p>
        <p className="playlistContent-infos-duration">{playlistDuration}</p>
      </div>
      <div className="playlistContent-buttons">
        <div className="darkOverlay"></div>
        <img src={playButton} alt="Play button" />
        <img
          onClick={followPLaylist}
          className="playlistContent-followHeart"
          src={followButton}
          alt="Follow button"
        />
        <img src={downloadButton} alt="Download button" />
        <div className="playlistContent-buttons-options">
          <img src={optionsButton} alt="Options button" onClick={showOptions} />
          <div className="playlistContent-buttons-optionsPopup">
            <p onClick={showEditPlaylistModal}>
              <img src={editButton} alt="" />
              Editar informações
            </p>
            <p
              onClick={() => {
                navigator.clipboard.writeText("Paga o spotify premium :)");
              }}
            >
              <img src={shareButton} alt="" />
              Compartilhar
            </p>
            <p className="playlistContent-followHeart" onClick={followPLaylist}>
              <img src={followButton} alt="" />
              Seguir
            </p>
            <p onClick={removeMusics}>
              <img src={removeMusicButton} alt="" />
              Remover músicas
            </p>
            <p onClick={showRemovePlaylistModal}>
              <img src={removePlaylistButton} alt="" />
              Remover playlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistContent;
