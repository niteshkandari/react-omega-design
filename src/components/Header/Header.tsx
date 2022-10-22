import * as React from "react";
import omega from "../../assets/omega-logo.png";
import Button from "../helper-components/Button";
import "./Header.css";

type HeaderProps = {
  //
};

const Header: React.FC<any> = () => {
  return (
    <div className="header-container">
     <div className="logo-box">
      <img src={omega} alt="logo"></img>
     </div>
     <div className="menu-box">
      <span><a>Demos </a></span>
      <span><a>Pages</a></span>
      <span><a>Support</a></span>
     </div>
     <Button>Get this app</Button>
    </div>
  );
};

export default Header;
