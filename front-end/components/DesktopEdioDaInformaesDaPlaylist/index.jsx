import React from "react";
import { Link } from "react-router-dom";
import Component35 from "../Component35";
import Group169 from "../Group169";
import Player from "../Player";
import Component29 from "../Component29";
import "./DesktopEdioDaInformaesDaPlaylist.css";

function DesktopEdioDaInformaesDaPlaylist(props) {
  const {
    image7,
    image8,
    image15,
    group183,
    toTheMoon,
    x3H6Min,
    name,
    image2,
    viewProfile,
    cleidsonCosta,
    bemVindo1,
    bemVindo2,
    img_15491613,
    albumCover,
    bemVindo3,
    bemVindo4,
    component35Props,
    group169Props,
    playerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-edicao-da-informacoes-da-playlist screen">
        <div className="overlap-group2-7">
          <img className="image-7-6" src={image7} alt="image 7" />
          <img className="image-8-6" src={image8} alt="image 8" />
          <img className="image-15-6" src={image15} alt="image 15" />
          <div className="group-183-1" style={{ backgroundImage: `url(${group183})` }}></div>
          <div className="to-the-moon-7 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
          <div className="x3h-6min-7 valign-text-middle roboto-normal-solitude-20px">{x3H6Min}</div>
          <Component35 className={component35Props.className} />
          <img className="icon-heart-28" src="/img/vector-4@2x.svg" alt="icon-heart" />
          <img className="vector-43" src="/img/vector-1@2x.svg" alt="Vector" />
          <div className="name-31 --normal-white-18px">{name}</div>
          <img className="image-2-14" src={image2} alt="image 2" />
          <div className="view-profile-13 roboto-medium-nobel-13px">{viewProfile}</div>
          <Group169 className={group169Props.className} />
          <div className="cleidson-costa-7 valign-text-middle roboto-normal-solitude-20px">{cleidsonCosta}</div>
          <div className="rectangle-267-1"></div>
          <img
            className="iconsappsapp-storemore-33"
            src="/img/icons-apps-app-store-more-1@2x.svg"
            alt="icons/apps/app store/more"
          />
          <Player {...playerProps} />
          <img className="rectangle-266-3" src="/img/rectangle-266-2@1x.svg" alt="Rectangle 266" />
          <div className="bem-vindo-8 valign-text-middle inter-bold-white-30px">{bemVindo1}</div>
          <div className="bem-vindo-9 valign-text-middle inter-bold-white-30px">{bemVindo2}</div>
          <div className="img_15491613 inter-bold-white-30px-2">{img_15491613}</div>
          <img className="album-cover" src={albumCover} alt="Album cover" />
          <div className="rectangle-291"></div>
          <div className="bem-vindo-10 valign-text-middle inter-bold-white-30px-2">{bemVindo3}</div>
          <Link to="/desktop-3">
            <div className="group-190-1">
              <Component29 />
            </div>
          </Link>
          <Link to="/desktop-3">
            <div className="group-230">
              <div className="overlap-group1-11">
                <div className="bem-vindo-11 valign-text-middle inter-bold-white-34px">{bemVindo4}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="ellipse-2-11"></div>
      </div>
    </div>
  );
}

export default DesktopEdioDaInformaesDaPlaylist;
