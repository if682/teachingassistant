import React from "react";
import "./removeModal.css";

import closeX from "./assets/closeX.svg";
import axiosInstance from "../common/server";
import { useState } from "react";
import { useNavigate } from "react-router";

function RemoveModal(props) {
  const { ID, selectedPlaylist, playlistName, playlistImage, playlistCategory } = props
  const navigate = useNavigate()

  const [message, setMessage] = useState(
  (<div className="removeModal-playlist-main">
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
    <p className="removeModal-playlist-modal-button" onClick={removePlaylist}>Excluir</p>
  </div>
</div>))

const [messageMusics, setMessageMusics] = useState((
  (
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
        <p className="removeModal-music-modal-button" onClick={removeMusics}>Excluir</p>
      </div>
    </div>
  )
))

  async function removeMusics() {
    console.log(props)
    console.log(playlistName)
    try {
      const response = await axiosInstance({
        method: 'post',
        url: '/updatePlaylist',
        headers: {}, 
        data: {
          id: ID,
          name: playlistName,
          image:  playlistImage,
          category: playlistCategory,
          musics: selectedPlaylist,
          accountID: parseInt(localStorage.getItem('accountID'),10)
        }
      })
      let val = response.data
      if(!val) {
        setMessageMusics(
          <div className="removeModal-music-main">
            <div className="removeModal-music-modal">
              <p className="removeModal-music-modal-text">
                Músicas Excluídas com sucesso!
              </p>
            </div>
          </div>
        )
        setTimeout(()=>{  
          window.location.reload()},2000)
      }
    } catch(err) {
      setMessageMusics((
        <div className="removeModal-playlist-main">
          <div className="removeModal-playlist-modal">
            <p className="removeModal-playlist-modal-text">
              Ocorreu um erro! Tente novamente mais tarde.
            </p>
          </div>
        </div>
      ))
      setTimeout(()=>{  
        closeModal();
        setMessageMusics((<div className="removeModal-music-main">
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
          <p className="removeModal-music-modal-button"  onClick={removeMusics}>Excluir</p>
        </div>
      </div>))
      },2000)
    }
  }

  async function removePlaylist() {

    try {
      const response = await axiosInstance({
          method: 'delete',
          url: '/deletePlaylist',
          headers: {}, 
          data: {
              id:ID
          }
        })
      let val = response.data
      if(!val) {
          setMessage((
            <div className="removeModal-playlist-main">
              <div className="removeModal-playlist-modal">
                <p className="removeModal-playlist-modal-text">
                  Playlist Excluída com sucesso!
                </p>
              </div>
            </div>
          ))
          setTimeout(()=>{  
            navigate('/')},2000)
      }
    } catch(err) {
      setMessage((
        <div className="removeModal-playlist-main">
          <div className="removeModal-playlist-modal">
            <p className="removeModal-playlist-modal-text">
              Ocorreu um erro! Tente novamente mais tarde.
            </p>
          </div>
        </div>
      ))
      setTimeout(()=>{  
        closeModal();
        setMessage((<div className="removeModal-music-main">
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
          <p className="removeModal-music-modal-button" onClick={removePlaylist}>Excluir</p>
        </div>
      </div>))
      },2000)
    }
  }


  function closeModal() {
    document.querySelector(".editPlaylistModalDiv").style.display = "none";
    document.querySelector(".removeMusicModalDiv").style.display = "none";
    document.querySelector(".removePlaylistModalDiv").style.display = "none";
  }
  
  if (props.modalFlag === "removePlaylist") {
    return message;
  } else if (props.modalFlag === "removeMusic") {
    return messageMusics
  }
}

export default RemoveModal;
