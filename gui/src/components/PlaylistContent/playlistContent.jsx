import React from "react"
import "./playlistContent.css"

import RemoveModal from "../RemoveModal/removeModal";
import EditPlaylistModal from "../EditPlaylistModal/editPlaylistModal";

import heart from "./assets/followersHeart.svg"
import playButton from "./assets/playButton.svg"
import followButton from "./assets/followButton.svg"
import downloadButton from "./assets/downloadButton.svg"
import optionsButton from "./assets/optionsButton.svg"
import editButton from "./assets/Edit.svg"
import removeMusicButton from "./assets/removeMusic.svg"
import removePlaylistButton from "./assets/removePlaylist.svg"
import shareButton from "./assets/share.svg"

import defaultImage from "./assets/defaultPlaylistImage.svg"

function PlaylistContent (props) {   
    let optionsFlag = 0

    function closeOptions(){
        document.querySelector(".playlistContent-buttons-optionsPopup").style.display = "none"
        document.querySelector(".darkOverlay").style.display = "none"

        document.querySelector(".playlistContent-buttons-options").style.zIndex = "initial"
        document.querySelector(".playlistContent-buttons-optionsPopup").style.zIndex = "initial"
        document.querySelector(".darkOverlay").style.zIndex = "initial"

        document.querySelector(".playlistMusics-main").style.zIndex = "initial"
        
        optionsFlag = 0
    }

    function openOptions(){
        document.querySelector(".playlistContent-buttons-optionsPopup").style.display = "flex"
        document.querySelector(".darkOverlay").style.display = "block"

        document.querySelector(".playlistContent-buttons-options").style.zIndex = "3"
        document.querySelector(".playlistContent-buttons-optionsPopup").style.zIndex = "3"
        document.querySelector(".darkOverlay").style.zIndex = "2"

        document.querySelector(".playlistMusics-main").style.zIndex = "0"
        optionsFlag = 1
    }

    function showOptions(){
        if(optionsFlag){
            closeOptions()
        }else{
            openOptions()
        }
    }

    function removeMusics() {
        document.querySelectorAll(".playlistMusics-music").forEach((music) => {
            music.lastElementChild.style.display = "none"
            music.lastElementChild.previousSibling.style.display = "block"
        })
        closeOptions()
        document.querySelector(".playlistMusics-removeAllMusicsButton").style.display = "flex"
    }

    function showRemovePlaylistModal(){
        document.querySelector(".removePlaylistModalDiv").style.display = "block"
    }

    function showEditPlaylistModal(){
        document.querySelector(".editPlaylistModalDiv").style.display = "block"
    }
    
    return (
        <div className="playlistContent-main">
            <div className="removePlaylistModalDiv">
                <RemoveModal modalFlag="removePlaylist"/>
            </div>
            <div className="removeMusicModalDiv">
                <RemoveModal modalFlag="removeMusic"/>
            </div>
            <div className="editPlaylistModalDiv">
                <EditPlaylistModal/>
            </div>
            <div className="playlistContent-image" style={ props.playlistImage ? {backgroundImage: `url(${props.playlistImage})`} : {backgroundImage: `url(${defaultImage})`}}>
                <p><img src={heart} alt="Followers heart"/>{props.followersNumber}</p>
            </div>
            <p className="playlistContent-name">{props.playlistName}</p>
            <div className="playlistContent-infos">
                <p>{props.playlistOwner}</p>
                <p className="playlistContent-infos-duration">{props.playlistDuration}</p>
            </div>
            <div className="playlistContent-buttons">
                <div className="darkOverlay"></div>
                <img src={playButton} alt="Play button"/>
                <img src={followButton} alt="Follow button"/>
                <img src={downloadButton} alt="Download button"/>
                <div className="playlistContent-buttons-options">
                    <img src={optionsButton} alt="Options button" onClick={showOptions}/>
                    <div className="playlistContent-buttons-optionsPopup">
                        <p onClick={showEditPlaylistModal}><img src={editButton} alt=""/>Editar informações</p>
                        <p><img src={shareButton} alt=""/>Compartilhar</p>
                        <p><img src={followButton} alt=""/>Seguir</p>
                        <p onClick={removeMusics}><img src={removeMusicButton} alt=""/>Remover músicas</p>
                        <p onClick={showRemovePlaylistModal}><img src={removePlaylistButton} alt=""/>Remover playlist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistContent