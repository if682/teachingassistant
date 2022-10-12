import React from "react";
import { Link } from "react-router-dom";
import Group178 from "../Group178";
import Group196 from "../Group196";
import Component29 from "../Component29";
import Group173 from "../Group173";
import "./Desktop7.css";

function Desktop7(props) {
  const {
    group177,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    image9,
    image10,
    bemVindo1,
    bemVindo2,
    group178Props,
    group173Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-7 screen">
        <div className="flex-row">
          <div className="overlap-group2">
            <div className="group-177" style={{ backgroundImage: `url(${group177})` }}></div>
            <div className="to-the-moon valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
            <div className="cleidson-costa valign-text-middle roboto-normal-solitude-20px">{cleidsonCosta}</div>
            <div className="x3h-6min valign-text-middle roboto-normal-solitude-20px">{x3H6Min}</div>
            <img className="image-9" src={image9} alt="image 9" />
            <img className="image-10" src={image10} alt="image 10" />
            <Group178 component35Props={group178Props.component35Props} />
            <Group196 />
            <div className="rectangle-259"></div>
            <Link to="/desktop-playlist-mais-categorias">
              <div className="group-190">
                <Component29 />
              </div>
            </Link>
            <div className="overlap-group1">
              <h1 className="bem-vindo valign-text-middle inter-bold-white-48px">{bemVindo1}</h1>
              <div className="group-179"></div>
              <div className="rectangle-252"></div>
            </div>
            <Link to="/desktop-4">
              <div className="bem-vindo-1 valign-text-middle inter-bold-white-34px">{bemVindo2}</div>
            </Link>
          </div>
          <div className="ellipse-2"></div>
        </div>
        <Group173 playerProps={group173Props.playerProps} />
      </div>
    </div>
  );
}

export default Desktop7;
