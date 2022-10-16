import React from "react"
import "./playlistContent.css"

import heart from "./assets/followersHeart.svg"
import playButton from "./assets/playButton.svg"
import followButton from "./assets/followButton.svg"
import downloadButton from "./assets/downloadButton.svg"
import optionsButton from "./assets/optionsButton.svg"
import editButton from "./assets/Edit.svg"
import addMusicButton from "./assets/addMusic.svg"
import removeMusicButton from "./assets/removeMusic.svg"
import removePlaylistButton from "./assets/removePlaylist.svg"
import shareButton from "./assets/share.svg"

import defaultImage from "./assets/defaultPlaylistImage.svg"

function PlaylistContent (props) {   
    let optionsFlag = 0

    function showOptions(){
        if(optionsFlag){
            document.querySelector(".playlistContent-buttons-optionsPopup").style.display = "none"
            document.querySelector(".darkOverlay").style.display = "none"
            optionsFlag = 0
        }else{
            document.querySelector(".playlistContent-buttons-optionsPopup").style.display = "flex"
            document.querySelector(".darkOverlay").style.display = "block"
            optionsFlag = 1
        }
    }
    
    return (
        <div className="playlistContent-main">
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
                        <p><img src={editButton} alt=""/>Editar informações</p>
                        <p><img src={shareButton} alt=""/>Compartilhar</p>
                        <p><img src={followButton} alt=""/>Seguir</p>
                        <p><img src={addMusicButton} alt=""/>Adicionar música</p>
                        <p><img src={removeMusicButton} alt=""/>Remover músicas</p>
                        <p><img src={removePlaylistButton} alt=""/>Remover playlist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistContent