import React from "react";
import "./Group169.css";

function Group169(props) {
  const { className } = props;

  return (
    <div className={`group-169-1 ${className || ""}`}>
      <div className="flex-col-12">
        <img className="vector-6" src="/img/vector-2@2x.svg" alt="Vector" />
        <div className="place-1 roboto-normal-mercury-11px">Home</div>
      </div>
      <div className="flex-col-13">
        <img className="vector-7" src="/img/vector-3@2x.svg" alt="Vector" />
        <div className="your-library-1 roboto-normal-white-11px">Your Library</div>
      </div>
      <div className="search-container-1">
        <img className="icon-search-1" src="/img/search@2x.svg" alt="icon-search" />
        <div className="search-1 roboto-normal-mercury-11px">Search</div>
      </div>
    </div>
  );
}

export default Group169;
