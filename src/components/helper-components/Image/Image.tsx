import * as React from "react";

type ImageProps = {
  //
};

const Image: React.FC<any> = (props) => {
  return <img src={props.children} alt="img"/>;
};

export default Image;
