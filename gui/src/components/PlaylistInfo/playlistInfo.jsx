import React from "react";
import PlaylistMusics from "../PlaylistMusics/playlistMusics";
import PlaylistContent from "../PlaylistContent/playlistContent";

import "./playlistInfo.css";

function PlaylistInfo({
  playlistName,
  followersNumber,
  playlistOwner,
  playlistDuration,
  playlistMusics,
}) {
  return (
    <div className="playlistInfo-main">
      <PlaylistContent
        playlistName={playlistName}
        followersNumber={followersNumber}
        playlistOwner={playlistOwner}
        playlistDuration={playlistDuration}
        playlistMusics={playlistMusics}
      />
      <PlaylistMusics playlistMusics={playlistMusics} />
    </div>
  );
}

export default PlaylistInfo;
