import React, { useEffect, useState } from "react";
import "./PlaylistPage.css";
import axiosInstance from "../common/server.js";
import { useLocation } from "react-router-dom";
import PlaylistInfo from "../PlaylistInfo/playlistInfo";

function PlaylistPage () {
  const [musics, setMusics] = useState(undefined);
  const location = useLocation();
  console.log(location);
  /*const { ID } = location.state;

  useEffect(() => {
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

      const playlist = await fetchPlaylistData();

      if (playlist.musics.length > 0) {
        const playlistMusics = playlist.musics.map((music) =>
          musics.find((el) => el.id === music)
        );
        const names = (
          <ul>
            {playlistMusics.map((el) => (
              <li>{el.name}</li>
            ))}{" "}
          </ul>
        );
        setMusics(names);
      }
    };

    run();

    return () => {};
  }, []);*/

  // Array auxiliar pra ajudar no desenvolvimento do front
  const musicArray = [
    {
      //image: "alguma imagem"
      name: "BDSM",
      owner: "Jonga Doido",
      album: "Jongalbum",
      releaseDate: "27 de jul. de 1945",
      duration: "1:13"
    },
    {
      //image: "alguma imagem"
      name: "BDSM",
      owner: "Jonga Doido",
      album: "Jongalbum",
      releaseDate: "27 de jul. de 1945",
      duration: "1:13"
    },
    {
      //image: "alguma imagem"
      name: "BDSM",
      owner: "Jonga Doido",
      album: "Jongalbum",
      releaseDate: "27 de jul. de 1945",
      duration: "1:13"
    },
    {
      //image: "alguma imagem"
      name: "BDSM",
      owner: "Jonga Doido",
      album: "Jongalbum",
      releaseDate: "27 de jul. de 1945",
      duration: "1:13"
    },
    {
      //image: "alguma imagem"
      name: "BDSM",
      owner: "Jonga Doido",
      album: "Jongalbum",
      releaseDate: "27 de jul. de 1945",
      duration: "1:13"
    }
  ];

  const voidMusicArray = []

  return (
    <div className="container">
      <div className="container-list">
        <div>
          <PlaylistInfo
            playlistName="To The Moon"
            followersNumber="5.7k"
            playlistOwner="Cleidson Costa"
            playlistDuration="3h 6min"
            playlistMusics={musicArray}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
