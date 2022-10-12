import React from "react";
import { Link } from "react-router-dom";
import Player from "../Player";
import Group1822 from "../Group1822";
import Group18222 from "../Group18222";
import "./DesktopPesquisa2.css";

function DesktopPesquisa2(props) {
  const {
    image2,
    name,
    viewProfile,
    place,
    yourLibrary,
    search,
    baby1,
    coraoRosaBebePng21,
    baby2,
    durao2431,
    coraoRosaBebePng22,
    baby3,
    durao2151,
    baby4,
    durao2301,
    baby5,
    durao2432,
    coraoRosaBebePng23,
    baby6,
    durao2302,
    baby7,
    durao2152,
    coraoRosaBebePng24,
    playerProps,
    group18221Props,
    group18222Props,
    group182221Props,
    group18223Props,
    group182222Props,
    group182223Props,
    group182224Props,
    group182225Props,
    group18224Props,
    group182226Props,
    group18225Props,
    group182227Props,
    group18226Props,
    group182228Props,
    group182229Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-pesquisa-2 roboto-extra-bold-white-20px screen">
        <div className="ellipse-2-3"></div>
        <div className="flex-col-40">
          <Link to="/desktop-playlist-mais-categorias">
            <div className="group-146">
              <div className="arrowleft-container">
                <img className="arrow-left" src="/img/arrowleft@2x.svg" alt="ArrowLeft" />
                <img className="arrow-left-1" src="/img/arrowleft@2x.svg" alt="ArrowLeft" />
              </div>
            </div>
          </Link>
          <Player {...playerProps} />
        </div>
        <div className="flex-row-19">
          <img className="image-2-12" src={image2} alt="image 2" />
          <div className="flex-col-41">
            <div className="name-26 --normal-white-18px">{name}</div>
            <div className="view-profile-11 roboto-medium-nobel-13px">{viewProfile}</div>
          </div>
          <div className="overlap-group5-1">
            <div className="place-13 roboto-normal-mercury-11px">{place}</div>
            <img className="vector-34" src="/img/vector-2@2x.svg" alt="Vector" />
            <div className="rectangle-585-1"></div>
            <Link to="/desktop-1">
              <div className="rectangle-586-1"></div>
            </Link>
          </div>
          <div className="flex-col-42">
            <img className="vector-35" src="/img/vector-3@2x.svg" alt="Vector" />
            <div className="your-library-13 roboto-normal-white-11px">{yourLibrary}</div>
          </div>
          <div className="overlap-group4-1">
            <img className="icon-search-13" src="/img/search@2x.svg" alt="icon-search" />
            <div className="search-13 roboto-normal-mercury-11px">{search}</div>
            <div className="overlap-group-6">
              <div className="baby-1 roboto-medium-licorice-16px">{baby1}</div>
            </div>
            <img className="icon-search-14" src="/img/search-4@2x.svg" alt="icon-search" />
          </div>
        </div>
        <img className="icon-heart-21" src="/img/flat-color-icons-like@2x.svg" alt="icon-heart" />
        <img className="group-1844" src="/img/group-1844@1x.svg" alt="Group 1844" />
        <img className="biplay-circle-fill-1" src="/img/bi-play-circle-fill@2x.svg" alt="bi:play-circle-fill" />
        <img className="corao-rosa-bebe-png-2" src={coraoRosaBebePng21} alt="Corao Rosa Bebe Png 2" />
        <Group1822 justinBieber={group18221Props.justinBieber} />
        <div className="baby-2">{baby2}</div>
        <div className="durao-243">{durao2431}</div>
        <Group18222 />
        <img className="group-1844-1" src="/img/group-1844-1@1x.svg" alt="Group 1844" />
        <img className="biplay-circle-fill-2" src="/img/bi-play-circle-fill-1@2x.svg" alt="bi:play-circle-fill" />
        <img className="corao-rosa-bebe-png-2-1" src={coraoRosaBebePng22} alt="Corao Rosa Bebe Png 2" />
        <Group1822 justinBieber={group18222Props.justinBieber} className={group18222Props.className} />
        <div className="baby-3">{baby3}</div>
        <div className="durao-215">{durao2151}</div>
        <Group18222 className={group182221Props.className} />
        <img className="group-1844-2" src="/img/group-1844-2@1x.svg" alt="Group 1844" />
        <img className="biplay-circle-fill-3" src="/img/bi-play-circle-fill-2@2x.svg" alt="bi:play-circle-fill" />
        <Group1822 justinBieber={group18223Props.justinBieber} className={group18223Props.className} />
        <div className="baby-4">{baby4}</div>
        <div className="durao-230">{durao2301}</div>
        <Group18222 className={group182222Props.className} />
        <Group18222 className={group182223Props.className} />
        <Group18222 className={group182224Props.className} />
        <div className="group-1850">
          <div className="overlap-group3-1">
            <img className="vector-32" src="/img/vector-14@2x.svg" alt="Vector" />
            <img className="vector-32" src="/img/vector-14@2x.svg" alt="Vector" />
            <div className="overlap-group-7">
              <Group18222 className={group182225Props.className} />
              <div className="flex-col-39">
                <div className="baby roboto-extra-bold-white-20px">{baby5}</div>
                <Group1822 justinBieber={group18224Props.justinBieber} className={group18224Props.className} />
              </div>
              <div className="durao-2 roboto-extra-bold-white-20px">{durao2432}</div>
              <img className="corao-rosa-bebe-png-2-2" src={coraoRosaBebePng23} alt="Corao Rosa Bebe Png 2" />
              <img className="biplay-circle-fill" src="/img/bi-play-circle-fill-3@2x.svg" alt="bi:play-circle-fill" />
            </div>
          </div>
          <div className="overlap-group2-1">
            <Group18222 className={group182226Props.className} />
            <div className="flex-col-39">
              <div className="baby roboto-extra-bold-white-20px">{baby6}</div>
              <Group1822 justinBieber={group18225Props.justinBieber} className={group18225Props.className} />
            </div>
            <div className="durao-2 roboto-extra-bold-white-20px">{durao2302}</div>
            <img className="vector-33" src="/img/vector-14@2x.svg" alt="Vector" />
            <img className="icon-heart-22" src="/img/vector-18@2x.svg" alt="icon-heart" />
            <img className="biplay-circle-fill-4" src="/img/bi-play-circle-fill-5@2x.svg" alt="bi:play-circle-fill" />
          </div>
          <div className="overlap-group1-3">
            <Group18222 className={group182227Props.className} />
            <div className="flex-col-39">
              <div className="baby roboto-extra-bold-white-20px">{baby7}</div>
              <Group1822 justinBieber={group18226Props.justinBieber} className={group18226Props.className} />
            </div>
            <div className="durao-215-1 roboto-extra-bold-white-20px">{durao2152}</div>
            <img className="vector-33" src="/img/vector-14@2x.svg" alt="Vector" />
            <img className="corao-rosa-bebe-png-2-3" src={coraoRosaBebePng24} alt="Corao Rosa Bebe Png 2" />
            <img className="biplay-circle-fill" src="/img/bi-play-circle-fill-4@2x.svg" alt="bi:play-circle-fill" />
          </div>
        </div>
        <Group18222 className={group182228Props.className} />
        <Group18222 className={group182229Props.className} />
      </div>
    </div>
  );
}

export default DesktopPesquisa2;
