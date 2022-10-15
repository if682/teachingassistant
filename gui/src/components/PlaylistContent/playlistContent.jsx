import React from "react"
import "./playlistContent.css"

import heart from "./assets/followersHeart.svg"
import playButton from "./assets/playButton.svg"
import followButton from "./assets/followButton.svg"
import downloadButton from "./assets/downloadButton.svg"
import optionsButton from "./assets/optionsButton.svg"
import defaultImage from "./assets/defaultPlaylistImage.svg"

function PlaylistContent (props) {   
    console.log(props) 
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
                <img src={playButton} alt="Play button"/>
                <img src={followButton} alt="Follow button"/>
                <img src={downloadButton} alt="Download button"/>
                <img src={optionsButton} alt="Options button"/>
            </div>
        </div>
    )
}

export default PlaylistContent