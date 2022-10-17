import React from "react";
import "./removeModal.css";

import closeX from "./assets/closeX.svg";

function RemoveModal(props) {
  function closeModal() {
    document.querySelector(".editPlaylistModalDiv").style.display = "none";
    document.querySelector(".removeMusicModalDiv").style.display = "none";
    document.querySelector(".removePlaylistModalDiv").style.display = "none";
  }
  
  if (props.modalFlag === "removePlaylist") {
    return (
      <div className="removeModal-playlist-main">
        <img
          onClick={closeModal}
          className="closeButtonModal"
          src={closeX}
          alt="Close Button"
        />
        <div className="removeModal-playlist-modal">
          <p className="removeModal-playlist-modal-text">
            Realmente deseja excluir essa playlist?
          </p>
          <p className="removeModal-playlist-modal-button">Excluir</p>
        </div>
      </div>
    );
  } else if (props.modalFlag === "removeMusic") {
    return (
      <div className="removeModal-music-main">
        <img
          onClick={closeModal}
          className="closeButtonModal"
          src={closeX}
          alt="Close Button"
        />
        <div className="removeModal-music-modal">
          <p className="removeModal-music-modal-text">
            Realmente deseja excluir a(s) música(s) selecionadas?
          </p>
          <p className="removeModal-music-modal-button">Excluir</p>
        </div>
      </div>
    );
  }
}

export default RemoveModal;
