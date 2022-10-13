import React from "react";
import { Link } from "react-router-dom";
import Group196 from "../Group196";
import Group178 from "../Group178";
import Component29 from "../Component29";
import Group173 from "../Group173";
import "./Desktop5.css";

function Desktop5(props) {
  const {
    group187,
    toTheMoon,
    cleidsonCosta,
    x3H6Min,
    image13,
    image14,
    bemVindo2,
    group196Props,
    group178Props,
    group173Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-5 screen">
        <div className="flex-row-32">
          <div className="overlap-group2-9">
            <Group196 className={group196Props.className} />
            <div className="group-187-1" style={{ backgroundImage: `url(${group187})` }}></div>
            <div className="to-the-moon-9 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
            <div className="cleidson-costa-9 valign-text-middle roboto-normal-solitude-20px">{cleidsonCosta}</div>
            <div className="x3h-6min-9 valign-text-middle roboto-normal-solitude-20px">{x3H6Min}</div>
            <img className="image-13-1" src={image13} alt="image 13" />
            <img className="image-14-1" src={image14} alt="image 14" />
            <Group178 className={group178Props.className} component35Props={group178Props.component35Props} />
            <div className="rectangle-263-1"></div>
            <img className="rectangle-264-1" src="/img/rectangle-264-1@1x.svg" alt="Rectangle 264" />
            <img className="bem-vindo-14" src="/img/bem-vindo@2x.svg" alt="Bem Vindo" />
            <Link to="/desktop-3">
              <div className="group-190-3">
                <Component29 />
              </div>
            </Link>
            <Link to="/desktop-3">
              <div className="group-229">
                <div className="overlap-group1-14">
                  <div className="rectangle-265-1"></div>
                  <div className="bem-vindo-15 valign-text-middle inter-bold-white-34px">{bemVindo2}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="ellipse-2-14"></div>
        </div>
        <Group173 playerProps={group173Props.playerProps} />
      </div>
    </div>
  );
}

export default Desktop5;
