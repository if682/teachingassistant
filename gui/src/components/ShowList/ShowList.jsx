import React, { useEffect, useRef, useState } from "react";
import "./ShowList.css";
import axiosInstance from "../common/server.js";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import { useNavigate } from "react-router-dom";
import Carousel, { CarouselItem } from "../carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShowList(props) {
  const [userPlaylists, setUserPlaylists] = useState("");
  const [trendingPlaylists, setTrendingPlaylists] = useState("");
  const [CreatePlaylistModal, setCreatePlaylistModal] = useState("");
  const [sort, setSort] = useState("Relevance");
  const CreatePlaylistModalRef = useRef(null);
  const [playlistID, setPlaylistID] = useState(undefined);

  const toggleDropdown = () => {
    console.log("show modal");
    setCreatePlaylistModal("show");
  };

  useEffect(() => {
    async function fetchUserPlaylists() {
      const response = await axiosInstance({
        method: "post",
        url: `/listPlaylistsBy${sort}`,
        headers: {},
        data: {
          accountID: parseInt(localStorage.getItem("accountID"), 10),
        },
      });
      let val = response.data;
      setUserPlaylists(val);
    }

    async function fetchTrendingPlaylists() {
      const response = await axiosInstance({
        method: "post",
        url: `/listPlaylists`,
        headers: {},
      });
      let val = response.data;
      setTrendingPlaylists(val);
    }

    const run = async () => {
      await fetchUserPlaylists();
      await fetchTrendingPlaylists();
    };

    run();
  }, [sort]);

  function showCreatePlaylistModal() {
    document.querySelector(".createPlaylistModalDiv").style.display = "block";
  }

  return (
    <div className="container-center-horizontal">
      <div className="user-page">
        <div className="outer-container">
          <div className="inner-container">
            <div className="overlap-container">
              <div className="playlist-name-container">
                <span className="playlists">
                  Suas Playlists
                  <button
                    type="button"
                    className="btn btn-outline "
                    onClick={showCreatePlaylistModal}
                  >
                    <span className="custom-btn">
                      <FontAwesomeIcon
                        icon={["fas", "fa-plus"]}
                      ></FontAwesomeIcon>
                    </span>
                  </button>
                </span>
              </div>
              <div className="carousel-container">
                <Carousel>
                  {userPlaylists ? (
                    userPlaylists.map((el) => (
                      <CarouselItem
                        key={el.id}
                        itemPath="/PlaylistPage"
                        value={el.id}
                      >
                        {" "}
                        {el}{" "}
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem> no playlist</CarouselItem>
                  )}
                </Carousel>
              </div>
            </div>
            <div className="overlap-container">
              <div className="playlist-name-container">
                <span className="playlists"> Em Alta</span>
              </div>
              <div className="carousel-container">
                <Carousel>
                  {trendingPlaylists ? (
                    trendingPlaylists.map((el) => (
                      <CarouselItem
                        key={el.id}
                        itemPath="/PlaylistPage"
                        value={el.id}
                      >
                        {" "}
                        {el}{" "}
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem> no playlist</CarouselItem>
                  )}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="createPlaylistModalDiv">
        <CreatePlaylist
          accountID={props.accountID}
          modalController={CreatePlaylistModal}
          openModal={setCreatePlaylistModal}
          modalRef={CreatePlaylistModalRef}
          categories={[undefined, "teste", "teste 2", "teste 3"]}
        />
      </div>
    </div>
  );
}

export default ShowList;
