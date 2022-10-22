import * as React from "react";
import MainHeading from "../helper-components/MainHeading";
import Text from "../helper-components/Text";
import Image from "../helper-components/Image";
import Iphone_1 from "../../assets/img-1.png";
import Iphone_2 from "../../assets/iphone_2.png";
import ms1 from "../../assets/ms1.jpg";
import ms2 from "../../assets/ms2.png";
import ms3 from "../../assets/ms3.png";
import ms4 from "../../assets/ms4.png";
import Button from "../helper-components/Button";
import "./MainSection.css";

type MainSectionProps = {
  //
};

const MainSection: React.FC<any> = () => {
  return (
    <div className="main-section">
      <div className="main-section-top">
        <div className="main-section-detail">
          <MainHeading>Making trip is fun. Travel with friends.</MainHeading>
          <Text color="#696871">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </Text>
          <div className="main-section-list">
            <div className="main-section-marker-box">
              <span>1</span>
              <h1>Find your trip partner</h1>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <Text color="#696871">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page quickly.
              </Text>
            </div>

            <div className="main-section-marker-box">
              <span>2</span>
              <h1>Plan trip with easy steps</h1>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <Text color="#696871">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page quickly.
              </Text>
            </div>
          </div>
        </div>
        <div className="main-section-image">
          <Image>{Iphone_1}</Image>
        </div>
      </div>

      <div className="main-section-middle">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={ms1} className="gallery__img" alt="Image 1" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={ms2} className="gallery__img" alt="Image 2" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={ms3} className="gallery__img" alt="Image 3" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={ms4} className="gallery__img" alt="Image 4" />
          </figure>
        </div>

        <div className="main-section-detail-middle">
          <MainHeading>See the world & spend less always.</MainHeading>
          <Text color="#696871">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </Text>
        </div>
      </div>

      <div className="main-section-bottom">
        <div className="main-section-detail-bottom">
         <MainHeading>Improving your travel experience.</MainHeading>
          <Text color="#696871">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </Text>
          <span style={{marginLeft:'1px',marginTop:'10px'}}><Button>Get this app</Button></span>
        </div>
        <div className="main-section-image">
          <Image>{Iphone_2}</Image>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
