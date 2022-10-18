import React from "react";
import "./addMusicModal.css";

import closeX from "./assets/closeX.svg";
import defaultMusicImage from "./assets/defaultMusicImage.png";

function AddMusicModal(props) {
  const {
    playlistName,
    followersNumber,
    playlistOwner,
    playlistMusics,
    playlistID,
    playlistImage,
    playlistCategory,
    selectedPlaylist,
    dataBaseMusics,
  } = props;

  console.log(dataBaseMusics);

  return (
    <div className="addMusicModal-main">
      <img
        onClick={closeModal}
        className="closeButtonModal"
        src={closeX}
        alt="Close Button"
      />
      <div className="addMusicModal-modal">
        <p className="addMusicModal-modal-text">Músicas recomendadas</p>
        <div className="addMusicModal-modal-musics">
          {dataBaseMusics &&
            dataBaseMusics.map((music, index) => {
              return (
                <div key={index} className="addMusicModal-music">
                  <div className="addMusicModal-music-infos">
                    <img
                      src={music.image ? music.image : defaultMusicImage}
                      alt=""
                    />
                    <div className="addMusicModal-music-infos-names">
                      <p className="addMusicModal-music-musicName">
                        {music.name}
                      </p>
                      <p className="addMusicModal-music-text">{music.owner}</p>
                    </div>
                  </div>
                  <div className="addMusicModal-music-removeCheckbox">
                    <input
                      type="checkbox"
                      value={index}
                      //onChange={(event) =>
                      //  removefromMusicArray(event.target.value)
                      //}
                      id={`addMusicModal-removeCheckbox${index}`}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <p className="addMusicModal-modal-button" onClick={AddSelectedMusics}>
          Adicionar
        </p>
      </div>
    </div>
  );

  function AddSelectedMusics() {}

  function closeModal() {
    document.querySelector(".editPlaylistModalDiv").style.display = "none";
    document.querySelector(".removeMusicModalDiv").style.display = "none";
    document.querySelector(".removePlaylistModalDiv").style.display = "none";
    document.querySelector(".addMusicModalDiv").style.display = "none";
  }
}

export default AddMusicModal;
