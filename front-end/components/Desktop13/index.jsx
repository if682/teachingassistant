import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Component35 from "../Component35";
import Player from "../Player";
import "./Desktop13.css";

function Desktop13(props) {
  const {
    spotifyPlaylist01ToTheMoon,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    image15,
    image7,
    image8,
    image17,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    imageContainer,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    removerTodas,
    group196Props,
    component35Props,
    playerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-13 screen">
        <div className="flex-col-43">
          <div className="overlap-group5-2">
            <Group196 className={group196Props.className} />
            <Link to="/desktop-pesquisa-1">
              <div className="rectangle-292-1"></div>
            </Link>
            <div className="rectangle-585-2"></div>
            <Link to="/desktop-1">
              <div className="rectangle-586-2"></div>
            </Link>
          </div>
          <div className="flex-row-20">
            <div className="flex-col-44">
              <div className="overlap-group-8">
                <img
                  className="spotify-playlist-01-to-the-moon"
                  src={spotifyPlaylist01ToTheMoon}
                  alt="Spotify Playlist 01 - To The Moon"
                />
                <Link to="/desktop-15">
                  <div className="rectangle-591"></div>
                </Link>
              </div>
              <div className="to-the-moon-2 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
              <div className="overlap-group4-2 roboto-normal-solitude-20px">
                <div className="cleidson-costa-2 valign-text-middle">{cleidsonCosta}</div>
                <div className="x3h-6min-2 valign-text-middle">{x3H6Min}</div>
              </div>
              <div className="flex-row-21">
                <Component35 className={component35Props.className} />
                <img className="icon-heart-23" src="/img/vector-19@2x.svg" alt="icon-heart" />
                <img className="vector-36" src="/img/vector-1@2x.svg" alt="Vector" />
                <Link to="/desktop-menu-de-opcoes" className="align-self-flex-end">
                  <img
                    className="iconsappsapp-storemore-11"
                    src="/img/icons-apps-app-store-more-17@2x.svg"
                    alt="icons/apps/app store/more"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-col-45">
              <img className="image-15-2" src={image15} alt="image 15" />
              <div className="overlap-group-container">
                <div className="image-container">
                  <img className="image-7-2" src={image7} alt="image 7" />
                  <img className="image-8-2" src={image8} alt="image 8" />
                  <img className="image-17-1" src={image17} alt="image 17" />
                  <img className="image-39" src={image39} alt="image 39" />
                  <img className="image-40" src={image40} alt="image 40" />
                  <img className="image-41" src={image41} alt="image 41" />
                  <img className="image-42" src={image42} alt="image 42" />
                  <img className="image-43" src={image43} alt="image 43" />
                  <img className="image-44" src={image44} alt="image 44" />
                </div>
                <div className="image-container-1" style={{ backgroundImage: `url(${imageContainer})` }}>
                  <img className="image-32" src={image32} alt="image 32" />
                  <img className="image-3" src={image33} alt="image 33" />
                  <img className="image-3-1" src={image34} alt="image 34" />
                  <img className="image-3" src={image35} alt="image 35" />
                  <img className="image-3" src={image36} alt="image 36" />
                  <img className="image-3-1" src={image37} alt="image 37" />
                  <img className="image-3" src={image38} alt="image 38" />
                </div>
              </div>
              <Link to="/desktop-3">
                <div className="group-233">
                  <div className="overlap-group1-4">
                    <div className="remover-todas">{removerTodas}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Player {...playerProps} />
        </div>
        <div className="ellipse-2-4"></div>
      </div>
    </div>
  );
}

export default Desktop13;
