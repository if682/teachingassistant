import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Component35 from "../Component35";
import Component3 from "../Component3";
import Group173 from "../Group173";
import "./Desktop10.css";

function Desktop10(props) {
  const {
    group164,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    image7,
    image8,
    bemVindo,
    image15,
    image16,
    image17,
    curtir,
    remover,
    baixar,
    component35Props,
    component3Props,
    group173Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-10 screen">
        <div className="flex-row-24">
          <div className="overlap-group1-9">
            <Group196 />
            <div className="group-164-2" style={{ backgroundImage: `url(${group164})` }}></div>
            <div className="to-the-moon-5 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
            <div className="cleidson-costa-5 valign-text-middle roboto-normal-solitude-20px">{cleidsonCosta}</div>
            <div className="x3h-6min-5 valign-text-middle roboto-normal-solitude-20px">{x3H6Min}</div>
            <img className="image-7-4" src={image7} alt="image 7" />
            <img className="image-8-4" src={image8} alt="image 8" />
            <div className="overlap-group-14">
              <img
                className="iconsappsinstagramadd-3"
                src="/img/icons-apps-instagram-add-3@2x.svg"
                alt="icons/apps/instagram/add"
              />
              <div className="rectangle-268-3"></div>
              <div className="bem-vindo-6 valign-text-middle inter-bold-white-12px">{bemVindo}</div>
            </div>
            <img className="image-15-4" src={image15} alt="image 15" />
            <Component35 className={component35Props.className} />
            <img className="icon-heart-25" src="/img/vector-4@2x.svg" alt="icon-heart" />
            <img className="vector-40" src="/img/vector-1@2x.svg" alt="Vector" />
            <img
              className="iconsappsapp-storemore-19"
              src="/img/icons-apps-app-store-more-18@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img className="image-16-2" src={image16} alt="image 16" />
            <img
              className="iconsappsapp-storemore-20"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-21"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-18"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-22"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-18"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-23"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-24"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img className="image-17-3" src={image17} alt="image 17" />
            <img
              className="iconsappsapp-storemore-25"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-26"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-27"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-28"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-29"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img
              className="iconsappsapp-storemore-30"
              src="/img/icons-apps-app-store-more-2@2x.svg"
              alt="icons/apps/app store/more"
            />
            <Link to="/desktop-3">
              <div className="rectangle-267"></div>
            </Link>
            <img
              className="iconsappsapp-storemore-31"
              src="/img/icons-apps-app-store-more-48@2x.svg"
              alt="icons/apps/app store/more"
            />
            <img className="rectangle-266-2" src="/img/rectangle-266-1@2x.svg" alt="Rectangle 266" />
            <div className="curtir roboto-semi-bold-white-16px">{curtir}</div>
            <Link to="/desktop-5">
              <div className="group-227">
                <Component3 albumProps={component3Props.albumProps} />
                <div className="remover-1 roboto-semi-bold-white-16px">{remover}</div>
              </div>
            </Link>
            <div className="baixar roboto-semi-bold-white-16px">{baixar}</div>
            <img className="vector-41" src="/img/vector-37@2x.svg" alt="Vector" />
            <img className="icon-heart-26" src="/img/vector-38@2x.svg" alt="icon-heart" />
          </div>
          <div className="ellipse-2-9"></div>
        </div>
        <Group173 playerProps={group173Props.playerProps} />
      </div>
    </div>
  );
}

export default Desktop10;
