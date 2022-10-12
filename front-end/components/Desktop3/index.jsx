import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Component35 from "../Component35";
import Player from "../Player";
import "./Desktop3.css";

function Desktop3(props) {
  const {
    group164,
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
      <div className="desktop-3 screen">
        <div className="flex-col-46">
          <div className="overlap-group4-5">
            <Group196 className={group196Props.className} />
            <Link to="/desktop-pesquisa-1">
              <div className="rectangle-292-3"></div>
            </Link>
            <div className="rectangle-585-4"></div>
            <Link to="/desktop-1">
              <div className="rectangle-586-3"></div>
            </Link>
          </div>
          <div className="flex-row-22">
            <div className="flex-col-47">
              <div className="group-164-1" style={{ backgroundImage: `url(${group164})` }}></div>
              <div className="to-the-moon-3 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
              <div className="overlap-group3-3 roboto-normal-solitude-20px">
                <div className="cleidson-costa-3 valign-text-middle">{cleidsonCosta}</div>
                <div className="x3h-6min-3 valign-text-middle">{x3H6Min}</div>
              </div>
              <div className="flex-row-23">
                <Component35 className={component35Props.className} />
                <img className="icon-heart-24" src="/img/vector@2x.svg" alt="icon-heart" />
                <img className="vector-39" src="/img/vector-1@2x.svg" alt="Vector" />
                <Link to="/desktop-menu-de-opcoes" className="align-self-flex-end">
                  <img
                    className="iconsappsapp-storemore-16"
                    src="/img/icons-apps-app-store-more-18@2x.svg"
                    alt="icons/apps/app store/more"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-col-48">
              <img className="image-15-3" src={image15} alt="image 15" />
              <div className="overlap-group2-4">
                <img className="image-7-3" src={image7} alt="image 7" />
                <img className="image-8-3" src={image8} alt="image 8" />
                <img className="image-16-1" src={image16} alt="image 16" />
                <img className="image-17-2" src={image17} alt="image 17" />
                <Link to="/desktop-10">
                  <div className="group-237-1">
                    <img
                      className="iconsappsapp-storemore-12"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-13"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-14"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-14"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <div className="overlap-group1-7">
                      <img
                        className="iconsappsapp-storemore-12"
                        src="/img/icons-apps-app-store-more-19@2x.svg"
                        alt="icons/apps/app store/more"
                      />
                    </div>
                    <img
                      className="iconsappsapp-storemore-13"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-14"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-17"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-15"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-14"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-15"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-15"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                    <img
                      className="iconsappsapp-storemore-14"
                      src="/img/icons-apps-app-store-more-19@2x.svg"
                      alt="icons/apps/app store/more"
                    />
                  </div>
                </Link>
              </div>
              <div className="overlap-group-12">
                <img
                  className="iconsappsinstagramadd-1"
                  src="/img/icons-apps-instagram-add-1@2x.svg"
                  alt="icons/apps/instagram/add"
                />
                <div className="rectangle-268-1"></div>
                <div className="bem-vindo-4 valign-text-middle inter-bold-white-12px">{bemVindo}</div>
              </div>
            </div>
          </div>
          <Player {...playerProps} />
        </div>
        <div className="ellipse-2-7"></div>
      </div>
    </div>
  );
}

export default Desktop3;
