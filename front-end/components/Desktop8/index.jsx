import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Group178 from "../Group178";
import Component29 from "../Component29";
import Group173 from "../Group173";
import "./Desktop8.css";

function Desktop8(props) {
  const {
    group187,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    image13,
    image14,
    bemVindo1,
    bemVindo2,
    group196Props,
    group178Props,
    group173Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-8 screen">
        <div className="flex-row-31">
          <div className="overlap-group1-13">
            <Group196 className={group196Props.className} />
            <div className="group-187" style={{ backgroundImage: `url(${group187})` }}></div>
            <div className="to-the-moon-8 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
            <div className="cleidson-costa-8 valign-text-middle roboto-normal-solitude-20px">{cleidsonCosta}</div>
            <div className="x3h-6min-8 valign-text-middle roboto-normal-solitude-20px">{x3H6Min}</div>
            <img className="image-13" src={image13} alt="image 13" />
            <img className="image-14" src={image14} alt="image 14" />
            <Group178 className={group178Props.className} component35Props={group178Props.component35Props} />
            <div className="rectangle-263"></div>
            <img className="rectangle-264" src="/img/rectangle-264@1x.svg" alt="Rectangle 264" />
            <div className="bem-vindo-12 valign-text-middle inter-bold-white-48px">{bemVindo1}</div>
            <Link to="/desktop-playlist-mais-categorias">
              <div className="group-236">
                <div className="overlap-group-18">
                  <div className="rectangle-265"></div>
                  <div className="bem-vindo-13 valign-text-middle inter-bold-white-34px">{bemVindo2}</div>
                </div>
              </div>
            </Link>
            <Link to="/desktop-3">
              <div className="group-190-2">
                <Component29 />
              </div>
            </Link>
          </div>
          <div className="ellipse-2-13"></div>
        </div>
        <Group173 playerProps={group173Props.playerProps} />
      </div>
    </div>
  );
}

export default Desktop8;
