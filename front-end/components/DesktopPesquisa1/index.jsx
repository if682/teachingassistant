import React from "react";
import { Link } from "react-router-dom";
import Player from "../Player";
import "./DesktopPesquisa1.css";

function DesktopPesquisa1(props) {
  const {
    yourLibrary,
    place,
    search,
    artistsSongsOrPodcasts,
    madeForYou,
    image1,
    discover,
    image2,
    concerts,
    image3,
    newReleases,
    image4,
    name,
    image22,
    viewProfile,
    podcasts,
    image5,
    playerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-pesquisa-1 screen">
        <div className="overlap-group6">
          <div className="overlap-group5-3">
            <Player {...playerProps} />
            <div className="your-library-14 roboto-normal-white-11px">{yourLibrary}</div>
            <div className="place-14 roboto-normal-mercury-11px">{place}</div>
            <img className="icon-search-15" src="/img/search@2x.svg" alt="icon-search" />
            <div className="search-14 roboto-normal-mercury-11px">{search}</div>
            <img className="vector-37" src="/img/vector-2@2x.svg" alt="Vector" />
            <img className="vector-38" src="/img/vector-3@2x.svg" alt="Vector" />
            <Link to="/desktop-pesquisa-2">
              <div className="group-1843">
                <div className="overlap-group-9">
                  <img className="icon-search-16" src="/img/search-4@2x.svg" alt="icon-search" />
                  <div className="artists-songs-or-podcasts roboto-medium-licorice-16px">{artistsSongsOrPodcasts}</div>
                </div>
              </div>
            </Link>
            <div className="overlap-group2-2">
              <div className="rectangle-24"></div>
              <div className="made-for-you dmsans-bold-white-29px">{madeForYou}</div>
              <div className="spotify-blog-header-square"></div>
              <img className="image-1" src={image1} alt="image" />
            </div>
            <div className="overlap-group3-2">
              <div className="discover dmsans-bold-white-29px">{discover}</div>
              <img className="image" src={image2} alt="image" />
            </div>
            <div className="concerts">
              <div className="overlap-group4-3">
                <div className="concerts-1 dmsans-bold-white-29px">{concerts}</div>
                <img className="image" src={image3} alt="image" />
              </div>
              <div className="overlap-group-10">
                <div className="new-releases dmsans-bold-white-29px">{newReleases}</div>
                <img className="image" src={image4} alt="image" />
              </div>
            </div>
            <Link to="/desktop-1">
              <div className="rectangle-585-3"></div>
            </Link>
          </div>
          <div className="name-27 --normal-white-18px">{name}</div>
          <img className="image-2-13" src={image22} alt="image 2" />
          <div className="view-profile-12 roboto-medium-nobel-13px">{viewProfile}</div>
          <div className="overlap-group1-5">
            <div className="podcasts dmsans-bold-white-29px">{podcasts}</div>
            <img className="image-4" src={image5} alt="image" />
          </div>
        </div>
        <div className="ellipse-2-5"></div>
      </div>
    </div>
  );
}

export default DesktopPesquisa1;
