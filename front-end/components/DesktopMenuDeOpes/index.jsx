import React from "react";
import { Link } from "react-router-dom";
import Component35 from "../Component35";
import Group169 from "../Group169";
import Component32 from "../Component32";
import Component33 from "../Component33";
import Component3 from "../Component3";
import Player from "../Player";
import "./DesktopMenuDeOpes.css";

function DesktopMenuDeOpes(props) {
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
    compartilhar,
    seguir,
    adicionarMsica,
    removerMsicas,
    kisspngComputerIconsEditingPencil5B,
    editarInformaes,
    image18,
    removerPlaylist,
    component35Props,
    group169Props,
    component32Props,
    component33Props,
    component3Props,
    playerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-menu-de-opcoes screen">
        <div className="overlap-group1-2">
          <img className="image-7-1" src={image7} alt="image 7" />
          <img className="image-8-1" src={image8} alt="image 8" />
          <img className="image-15-1" src={image15} alt="image 15" />
          <div className="group-183" style={{ backgroundImage: `url(${group183})` }}></div>
          <div className="to-the-moon-1 valign-text-middle inter-bold-solitude-38px">{toTheMoon}</div>
          <div className="x3h-6min-1 valign-text-middle roboto-normal-solitude-20px">{x3H6Min}</div>
          <Component35 className={component35Props.className} />
          <img className="icon-heart-20" src="/img/vector@2x.svg" alt="icon-heart" />
          <img className="vector-31" src="/img/vector-1@2x.svg" alt="Vector" />
          <div className="name-25 --normal-white-18px">{name}</div>
          <img className="image-2-11" src={image2} alt="image 2" />
          <div className="view-profile-10 roboto-medium-nobel-13px">{viewProfile}</div>
          <Group169 className={group169Props.className} />
          <div className="cleidson-costa-1 valign-text-middle roboto-normal-solitude-20px">{cleidsonCosta}</div>
          <div className="rectangle-266"></div>
          <img className="rectangle-266-1" src="/img/rectangle-266@2x.svg" alt="Rectangle 266" />
          <div className="compartilhar roboto-semi-bold-white-16px">{compartilhar}</div>
          <img className="icon-upload_arrow" src="/img/share@2x.svg" alt="icon-upload_arrow" />
          <div className="seguir roboto-semi-bold-white-16px">{seguir}</div>
          <Component32 text5={component32Props.text5} />
          <div className="adicionar-msica roboto-semi-bold-white-16px">{adicionarMsica}</div>
          <Component33 text6={component33Props.text6} />
          <Link to="/desktop-12">
            <div className="group-231">
              <Component3 albumProps={component3Props.albumProps} />
              <div className="remover roboto-semi-bold-white-16px">{removerMsicas}</div>
            </div>
          </Link>
          <Link to="/desktop-edicao-da-informacoes-da-playlist">
            <div className="group-228">
              <img
                className="kisspng-computer-ico"
                src={kisspngComputerIconsEditingPencil5B}
                alt="kisspng-computer-icons-editing-pencil-5b21b26ca63f23 1"
              />
              <div className="editar-informaes roboto-semi-bold-white-16px">{editarInformaes}</div>
            </div>
          </Link>
          <Link to="/desktop-8">
            <div className="group-234">
              <img className="image-18-1" src={image18} alt="image 18" />
              <div className="remover roboto-semi-bold-white-16px">{removerPlaylist}</div>
            </div>
          </Link>
          <Player {...playerProps} />
          <img
            className="iconsappsapp-storemore-10"
            src="/img/icons-apps-app-store-more-1@2x.svg"
            alt="icons/apps/app store/more"
          />
        </div>
        <div className="ellipse-2-2"></div>
      </div>
    </div>
  );
}

export default DesktopMenuDeOpes;
