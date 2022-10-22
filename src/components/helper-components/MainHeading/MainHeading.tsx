import * as React from "react";
import "./MainHeading.css"
type MainHeadingProps = {
  children:string,
};

const MainHeading: React.FC<any> = ({children}:MainHeadingProps) => {
  return <h1 className="header">{children}</h1>;
};

export default MainHeading;
