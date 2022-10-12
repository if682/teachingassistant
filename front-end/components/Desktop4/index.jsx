import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Group178 from "../Group178";
import Player from "../Player";
import "./Desktop4.css";

function Desktop4(props) {
  const {
    spotifyPlaylist01ToTheMoon,
    bemVindo,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    group196Props,
    group178Props,
    playerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-4 screen">
        <div className="flex-col-49">
          <div className="overlap-group2-5">
            <Group196 className={group196Props.className} />
            <Link to="/desktop-pesquisa-1">
              <div className="rectangle-292-4"></div>
            </Link>
            <Link to="/desktop-1">
              <div className="rectangle-585-5"></div>
            </Link>
          </div>
          <div className="group-container">
            <div className="overlap-group-13">
              <img
                className="spotify-playlist-01-to-the-moon-1"
                src={spotifyPlaylist01ToTheMoon}
                alt="Spotify Playlist 01 - To The Moon"
              />
              <Link to="/desktop-15">
                <div className="rectangle-591-1"></div>
              </Link>
            </div>
            <Link to="/desktop-3">
              <div className="group-199">
                <div className="overlap-group1-8">
                  <img
                    className="iconsappsinstagramadd-2"
                    src="/img/icons-apps-instagram-add-2@2x.svg"
                    alt="icons/apps/instagram/add"
                  />
                  <div className="rectangle-268-2"></div>
                  <div className="bem-vindo-5 valign-text-middle inter-bold-white-34px">{bemVindo}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="to-the-moon-4 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
          <div className="overlap-group3-4 roboto-normal-solitude-20px">
            <div className="cleidson-costa-4 valign-text-middle">{cleidsonCosta}</div>
            <div className="x3h-6min-4 valign-text-middle">{x3H6Min}</div>
          </div>
          <Group178 className={group178Props.className} component35Props={group178Props.component35Props} />
          <Player {...playerProps} />
        </div>
        <div className="ellipse-2-8"></div>
      </div>
    </div>
  );
}

export default Desktop4;
