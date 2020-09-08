import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="ui secondary menu" style={{ marginLeft: "70px" }}>
      <div className="item">
        <img src="https://pbs.twimg.com/profile_images/1278756735696527360/I0XDeEwS.png" />
      </div>
      <div className="right menu">
        <a href="" className="item">
          Industries
        </a>
        <a href="" className="item" style={{ marginLeft: "60px" }}>
          Solutions
        </a>
        <a href="" className="item" style={{ marginLeft: "60px" }}>
          Products
        </a>
        <a href="" className="item" style={{ marginLeft: "60px" }}>
          Resources
        </a>
        <a href="" className="item" style={{ marginLeft: "60px" }}>
          Company
        </a>
        <button
          style={{ borderRadius: "100px", height: "50px", marginLeft: "30px" }}
          className="ui inverted green button"
        >
          Request a Demo
        </button>

        <div
          className="ui simple pointing dropdown link item"
          style={{ marginLeft: "60px" }}
        >
          <span className="text">
            <i className="us flag" />
          </span>
          <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item">
              <i className="zw flag" />
            </a>
            <a className="item">
              <i className="es flag" />
            </a>
            <a className="item">
              <i className="fr flag" />
            </a>
            <a className="item">
              <i className="gb flag" />
            </a>
            <a className="item">
              <i className="in flag" />
            </a>
            <a className="item">
              <i className="il flag" />
            </a>
            <a className="item">
              <i className="mx flag" />
            </a>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
