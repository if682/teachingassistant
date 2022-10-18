import "./Carousel.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CarouselItem = (props) => {
  const { children, width, itemPath } = props;

  const el = children[1];
  console.log(children);
  return (
    <div
      className="carousel-item-custom"
      style={{ width: width, backgroundImage: `url(${el.image})` }}
    >
      <div className="carousel-item-overlay"></div>
      <Link
        to={{ pathname: `${itemPath}` }}
        state={{ ID: el.id, accountID: el.accountID }}
        style={{
          position: "relative",
          zIndex: "3",   
          textDecoration: "none",
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <span className="main-title-playlist">{el.name}</span>
      </Link>
    </div>
  );
};

const Carousel = (props) => {
  const numberOfElements = 3;

  const displaySize = 100 / numberOfElements;

  const { children } = props;

  const [index, setIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (
      newIndex >=
      React.Children.count(children) - (numberOfElements - 1)
    ) {
      newIndex = 0;
    }

    setIndex(newIndex);
  };

  const arrowRight = () => {
    updateIndex(index + 1);
  };

  return (
    <div className="control">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${index * displaySize}%)` }}
        >
          {React.Children.map(children, (el, i) => {
            return React.cloneElement(el, { width: `${displaySize - 1}%` });
          })}
        </div>
      </div>
      <span className="indicators right" onClick={arrowRight}>
        <img src="/images/arrowleft.svg" alt="ArrowLeft"></img>
      </span>
    </div>
  );
};

export default Carousel;
