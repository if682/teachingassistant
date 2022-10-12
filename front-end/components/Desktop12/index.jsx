import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Component35 from "../Component35";
import Player from "../Player";
import "./Desktop12.css";

function Desktop12(props) {
  const {
    spotifyPlaylist01ToTheMoon,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    image15,
    image7,
    image8,
    image16,
    image17,
    bemVindo,
    group196Props,
    component35Props,
    playerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-12 screen">
        <div className="flex-col-50">
          <div className="overlap-group4-6">
            <Group196 className={group196Props.className} />
            <Link to="/desktop-pesquisa-1">
              <div className="rectangle-292-5"></div>
            </Link>
            <div className="rectangle-585-6"></div>
            <Link to="/desktop-1">
              <div className="rectangle-586-4"></div>
            </Link>
          </div>
          <div className="flex-row-25">
            <div className="flex-col-51">
              <div className="overlap-group-15">
                <img
                  className="spotify-playlist-01-to-the-moon-2"
                  src={spotifyPlaylist01ToTheMoon}
                  alt="Spotify Playlist 01 - To The Moon"
                />
                <Link to="/desktop-15">
                  <div className="rectangle-591-2"></div>
                </Link>
              </div>
              <div className="to-the-moon-6 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
              <div className="overlap-group2-6 roboto-normal-solitude-20px">
                <div className="cleidson-costa-6 valign-text-middle">{cleidsonCosta}</div>
                <div className="x3h-6min-6 valign-text-middle">{x3H6Min}</div>
              </div>
              <div className="flex-row-26">
                <Component35 className={component35Props.className} />
                <img className="icon-heart-27" src="/img/vector@2x.svg" alt="icon-heart" />
                <img className="vector-42" src="/img/vector-1@2x.svg" alt="Vector" />
                <Link to="/desktop-menu-de-opcoes" className="align-self-flex-end">
                  <img
                    className="iconsappsapp-storemore-32"
                    src="/img/icons-apps-app-store-more-1@2x.svg"
                    alt="icons/apps/app store/more"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-col-52">
              <img className="image-15-5" src={image15} alt="image 15" />
              <div className="overlap-group3-5">
                <img className="image-7-5" src={image7} alt="image 7" />
                <img className="image-8-5" src={image8} alt="image 8" />
                <img className="image-16-3" src={image16} alt="image 16" />
                <img className="image-17-4" src={image17} alt="image 17" />
                <Link to="/desktop-13">
                  <img className="group-232" src="/img/group-232@1x.svg" alt="Group 232" />
                </Link>
              </div>
              <div className="overlap-group1-10">
                <img
                  className="iconsappsinstagramadd-4"
                  src="/img/icons-apps-instagram-add-4@2x.svg"
                  alt="icons/apps/instagram/add"
                />
                <div className="rectangle-268-4"></div>
                <div className="bem-vindo-7 valign-text-middle inter-bold-white-12px">{bemVindo}</div>
              </div>
            </div>
          </div>
          <Player {...playerProps} />
        </div>
        <div className="ellipse-2-10"></div>
      </div>
    </div>
  );
}

export default Desktop12;
