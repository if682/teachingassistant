import React, { useEffect, useState } from "react";
import "./PlaylistPage.css";
import axiosInstance from "../common/server.js";
import { useLocation } from "react-router-dom";
import PlaylistInfo from "../PlaylistInfo/playlistInfo";

function PlaylistPage () {
  const [musics, setMusics] = useState([]);
  const [playlist, setPlaylist] = useState('')
  const [user, setUser] = useState('')
  const [playlistTime, setPlaylistTime] = useState('-')
  const location = useLocation();
  const { ID } = location.state;

  useEffect(() => {

    async function fetchUser() {
      const response = await axiosInstance({
        method: "post",
        url: `/getUser`,
        headers: {},
        data: {
          accountID: parseInt(localStorage.getItem('accountID'),10)
        },
      });
      let val = await response.data
      return val
    }

    async function fetchPlaylistData() {
      const response = await axiosInstance({
        method: "post",
        url: `/getPlaylist`,
        headers: {},
        data: {
          id: ID,
        },
      });
      let val = await response.data;
      return val;
    }

    async function fetchMusics() {
      const response = await axiosInstance({
        method: "post",
        url: `/listMusics`,
        headers: {},
      });
      let val = await response.data;
      return val;
    }

    const run = async () => {
      const musics = await fetchMusics();

      const playlistData = await fetchPlaylistData();

      const user = await fetchUser()

      setUser(user.name)

      setPlaylist(playlistData)
      if (playlistData.musics.length > 0) {
        const playlistMusics = playlistData.musics.map((music) =>
          musics.find((el) => el.id === music)
        );
        console.log(playlistMusics)
        
        setMusics(playlistMusics)

        let duration = playlistMusics.map(el => {
          let  aux = el.duration
          let min = parseInt(aux.substring(0,aux.indexOf(':')))
          let segs = parseInt(aux.substring(aux.indexOf(':')+1))
          return min*60 + segs
        })
  
        let val = duration.reduce((accumulator,value) => {
          return accumulator + value
        })
  
        setPlaylistTime(`${Math.floor(val/60)}:${val%60}`)
      }
    };

    run();

    return () => {
      setMusics([])
      setPlaylist('')
    };
  }, [])

  return (
    <div className="container-playlist-page">
      <div className="container-list-playlist-page">
        <div>
          <PlaylistInfo
            playlistName={playlist.name}
            followersNumber={playlist.followers ? playlist.followers.length: 0}
            playlistOwner={user ? user : ''}
            playlistDuration={playlistTime}
            playlistMusics={musics}
            playlistID={ID}
            playlistImage={playlist.image}
            playlistCategory={playlist.category}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
