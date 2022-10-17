import React from "react";
import PlaylistMusics from "../PlaylistMusics/playlistMusics";
import PlaylistContent from "../PlaylistContent/playlistContent";

import "./playlistInfo.css";
import { useState } from "react";

function PlaylistInfo({
  playlistName,
  followersNumber,
  playlistOwner,
  playlistDuration,
  playlistMusics,
  playlistID,
  playlistImage,
  playlistCategory
}) {

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlistMusics)

  function handleSelectedPlaylist(value) {
    setSelectedPlaylist(value)
  }

  return (
    <div className="playlistInfo-main">
      <PlaylistContent
        playlistName={playlistName}
        followersNumber={followersNumber}
        playlistOwner={playlistOwner}
        playlistDuration={playlistDuration}
        playlistMusics={playlistMusics}
        playlistID={playlistID}
        playlistImage = {playlistImage}
        playlistCategory={playlistCategory}
        selectedPlaylist={selectedPlaylist}
      />
      <PlaylistMusics setSelection={handleSelectedPlaylist} playlistName={playlistName} playlistID={playlistID} playlistImage = {playlistImage} playlistCategory={playlistCategory} playlistMusics={playlistMusics} />
    </div>
  );
}

export default PlaylistInfo;
