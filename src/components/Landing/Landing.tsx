import * as React from "react";
import iphone from "../../assets/i-phone-body.png";
import emailIcon from "../../assets/email.svg";
import MainHeading from "../helper-components/MainHeading";
import Text from "../helper-components/Text";
import "./Landing.css";
type LandingProps = {
  //
};

const Landing: React.FC<any> = () => {
  return (
    <div className="landing-container">
      <div className="iphone-img-container">
        <img src={iphone} className="iphone-img"></img>
      </div>
      <div className="landing-text-container">
        <MainHeading>Travel the world & meet new friends.</MainHeading>
        <Text>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</Text>
        <div className="landing-address-box">
          <img src={emailIcon}></img>
          <input placeholder="Email addres"></input>
          <button>I want to join</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
