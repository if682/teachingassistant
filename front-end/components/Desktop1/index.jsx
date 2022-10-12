import React from "react";
import { Link } from "react-router-dom";
import Player from "../Player";
import Group169 from "../Group169";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    origins,
    imagineDragon1,
    believer,
    imagineDragon2,
    monstersGoBump,
    name1,
    ultimoAcessoFoiA,
    spanText1,
    spanText2,
    recomendadoParaVoc,
    dreamOn,
    name2,
    shortwave,
    name3,
    playerProps,
    group169Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="overlap-group6-1">
          <div className="rectangle-6-1"></div>
          <div className="overlap-group-11">
            <img className="mask-group" src="/img/mask-group-1@2x.svg" alt="Mask Group" />
            <div className="origins valign-text-middle roboto-medium-solitude-14px">{origins}</div>
            <div className="imagine-dragon valign-text-middle roboto-normal-perano-10px">{imagineDragon1}</div>
          </div>
          <div className="overlap-group1-6">
            <img className="mask-group-1" src="/img/mask-group-2@2x.svg" alt="Mask Group" />
            <img className="mask-group-2" src="/img/mask-group-3@2x.svg" alt="Mask Group" />
            <div className="believer valign-text-middle roboto-medium-solitude-14px">{believer}</div>
            <div className="imagine-dragon-1 valign-text-middle roboto-normal-perano-10px">{imagineDragon2}</div>
          </div>
          <div className="group-131">
            <div className="overlap-group2-3">
              <img className="mask-group-3" src="/img/mask-group-5@2x.svg" alt="Mask Group" />
              <div className="monsters-go-bump valign-text-middle">{monstersGoBump}</div>
            </div>
            <div className="name-28 valign-text-middle roboto-normal-perano-10px">{name1}</div>
          </div>
          <img className="rectangle-5" src="/img/rectangle-5@1x.svg" alt="Rectangle 5" />
          <p className="ultimo-acesso-foi-a valign-text-middle">{ultimoAcessoFoiA}</p>
          <div className="bem-vindo-3 valign-text-middle">
            <span>
              <span className="inter-bold-white-48px">{spanText1}</span>
              <span className="span1">{spanText2}</span>
            </span>
          </div>
          <div className="recomendado-para-voc valign-text-middle inter-bold-solitude-24px">{recomendadoParaVoc}</div>
          <img className="arrow-left-2" src="/img/arrowleft-2@2x.svg" alt="ArrowLeft" />
          <Link to="/desktop-playlist-mais-categorias">
            <div className="group-146-1">
              <div className="arrowleft-container-1">
                <img className="arrow-left-3" src="/img/arrowleft-5@2x.svg" alt="ArrowLeft" />
                <img className="arrow-left-4" src="/img/arrowleft-5@2x.svg" alt="ArrowLeft" />
              </div>
            </div>
          </Link>
          <img className="arrow-left-5" src="/img/arrowleft-3@2x.svg" alt="ArrowLeft" />
          <img className="arrow-left-2" src="/img/arrowleft-2@2x.svg" alt="ArrowLeft" />
          <div className="overlap-group4-4">
            <img className="mask-group-4" src="/img/mask-group-6@2x.svg" alt="Mask Group" />
            <img className="mask-group-5" src="/img/mask-group-7@2x.svg" alt="Mask Group" />
            <div className="dream-on valign-text-middle roboto-medium-solitude-14px">{dreamOn}</div>
            <div className="name-29 valign-text-middle roboto-normal-perano-10px">{name2}</div>
          </div>
          <div className="overlap-group5-4">
            <img className="mask-group-6" src="/img/mask-group-9@2x.svg" alt="Mask Group" />
            <div className="shortwave valign-text-middle roboto-medium-solitude-14px">{shortwave}</div>
            <div className="name-30 valign-text-middle roboto-normal-perano-10px">{name3}</div>
          </div>
          <Player {...playerProps} />
          <Group169 className={group169Props.className} />
          <Link to="/desktop-pesquisa-1">
            <div className="rectangle-292-2"></div>
          </Link>
        </div>
        <div className="ellipse-2-6"></div>
      </div>
    </div>
  );
}

export default Desktop1;
