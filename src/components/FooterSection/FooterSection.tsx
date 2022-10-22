import * as React from "react";
import MainHeading from "../helper-components/MainHeading";
import Text from "../helper-components/Text";
import omega from "../../assets/omega-logo.png";
import playstore from "../../assets/play-store.png";
import appstore from "../../assets/app-store.png";
import "./FooterSection.css";

type FooterSectionProps = {
  //
};

const FooterSection: React.FC<any> = () => {
  return (
    <footer>
      <div className="footer-top">
        <MainHeading>Get the app now</MainHeading>
        <Text size="12px" color="#696871">
          Create custom landing pages with Omega that converts <br /> more
          visitors than any website.
        </Text>
        <div className="footer-top_icon-box">
          <img src={appstore} />
          <img src={playstore} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom_left">
            <img src={omega} alt="logo"></img>
           <Text size="12px" color="#696871">© 2020 UXTheme, All Rights Reserved</Text>
        </div>
        <div className="footer-bottom_right">
          <span><a>Support</a></span>
          <span><a>Privacy Policy </a></span>
          <span><a>Terms and Conditions</a></span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
