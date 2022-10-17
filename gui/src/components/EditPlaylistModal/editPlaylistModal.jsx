import React from "react";
import "./editPlaylistModal.css";

import closeX from "./assets/closeX.svg";

function EditPlaylistModal(props) {
  function closeModal() {
    document.querySelector(".editPlaylistModalDiv").style.display = "none"
    document.querySelector(".removeMusicModalDiv").style.display = "none"
    document.querySelector(".removePlaylistModalDiv").style.display = "none"
  }

  return (
    <div className="editPlaylistModal-main">
      <img
        onClick={closeModal}
        className="closeButtonModal"
        src={closeX}
        alt="Close Button"
      />
      <div className="editPlaylistModal-modal">
        <p className="editPlaylistModal-text">Nome da Playlist</p>
        <input
          className="editPlaylistModal-inputName"
          type="text"
          id="playlistName"
          name="playlistName"
        />
        <p className="editPlaylistModal-text">Imagem de Capa</p>
        <div className="editPlaylistModal-inputImage">
          <label for="playlistImage">Enviar imagem</label>
          <input
            className="editPlaylistModal-inputImage"
            type="file"
            id="playlistImage"
            name="playlistImage"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="editPlaylistModal-button">
          <p>Confirmar</p>
        </div>
      </div>
    </div>
  );
}

export default EditPlaylistModal;
