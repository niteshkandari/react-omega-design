import * as React from "react";
import Star from "../../assets/star.svg";
import { card_data, CardData } from "./models/card_data-class";
import "./CommentSection.css";
type CommentSectionProps = {
  //
};

const CommentSection: React.FC<any> = () => {
  return (
    <div className="comment-section">
      {card_data.map((item: CardData, idx) => (
        <CardTemplate key={idx} item={item} />
      ))}
    </div>
  );
};

export default CommentSection;

const CardTemplate = ({ item }: any) => {
  const { no_of_stars, text, author } = item;
  return (
    <div className="card">
      <div className="card_img_container">
        {Array(no_of_stars)
          .fill(null)
          .map((_, idx: number) => (
            <img src={Star} key={idx}></img>
          ))}
      </div>
      <p>{text}</p>
      <span>{author}</span>
    </div>
  );
};
