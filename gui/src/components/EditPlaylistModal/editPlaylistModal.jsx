import React, { useEffect } from "react";
import "./editPlaylistModal.css";

import closeX from "./assets/closeX.svg";
import axiosInstance from "../common/server";
import { useState } from "react";
import { s3 } from "../../config/aws";
import { useNavigate } from "react-router";

function EditPlaylistModal({ playlistName, followersNumber, playlistOwner, playlistMusics, playlistID, playlistImage, playlistCategory }) {


  const [currentPlaylistName, setPlaylistName] = useState(playlistName)
  const [image, setImage] = useState(playlistImage)
  const [preview, setPreview] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    setPlaylistName(playlistName)
  },[playlistName])

  async function editPlaylist() {
    try{
      const response = await axiosInstance({
          method: 'post',
          url: '/updatePlaylist',
          headers: {}, 
          data: {
            id: playlistID,
            name: currentPlaylistName,
            image: (image ? image : playlistImage),
            category: playlistCategory,
            musics: playlistMusics,
            accountID: parseInt(localStorage.getItem('accountID'),10)
          }
        })

        let val = response.data
        console.log(val)
        setSent(true)
        setTimeout(()=> {closeModal(); window.location.reload()}, 2000)
    } catch(error) {
      setErrorMessage(
        <div className="editPlaylistModal-alert"><p className="editPlaylistModal-alert-text">Erro ao editar informações! Tente novamente mais tarde</p></div>
      )
      setTimeout(closeModal  , 2000)
    }
  }

  const handlePlaylistImage = async function(event) {
    event.stopPropagation()
    try{
      const converted = new File([event.target.files[0]], event.target.files[0].name)

      const params = {
        Bucket: 'projeto-ess-sharkmusic-bucket',
        Key: event.target.files[0].name,
        Body: converted
      }

      const response = await s3.upload(params).promise()

      setImage(response.Location)
    
      setPreview(
        <><p className="editPlaylistModal-text">Nova Imagem de Capa</p><div className="editPlaylistModal-inputImagePreview">
          <label for="playlistImagePreview">Prévia</label>
          <img src={response.Location} style={{padding:'5px', width:'80%'}}/>
        </div></>
      )
    } catch(err) {
      console.log('erro no upload de imagem', err)
      setErrorMessage(
        <div className="editPlaylistModal-alert"><p className="editPlaylistModal-alert-text">Erro no upload da imagem! Tente novamente mais tarde</p></div>
      )
      setTimeout(closeModal, 2000)
    }
  }

  function closeModal() {

    setPlaylistName(playlistName)
    setImage(playlistImage)
    setPreview(null)
    setSent(false)

    document.querySelector(".editPlaylistModalDiv").style.display = "none"
    document.querySelector(".removeMusicModalDiv").style.display = "none"
    document.querySelector(".removePlaylistModalDiv").style.display = "none"
  }
  if (sent!==true) {
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
          value={currentPlaylistName}
          onChange={(event)=>{setPlaylistName(event.target.value)}}
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
            onChange={handlePlaylistImage}
          />
        </div>
        {preview}
        {errorMessage}
        <div className="editPlaylistModal-button" onClick={editPlaylist}>
          <p>Confirmar</p>
        </div>
      </div>
    </div>
  )} else { return(
    <div className="editPlaylistModal-main">
    <div className="editPlaylistModal-modal">
      <p className="editPlaylistModal-text">Informações editadas com sucesso!</p>
    </div>
  </div>)
  }
}

export default EditPlaylistModal;
