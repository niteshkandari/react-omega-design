import * as React from "react";
import "./Button.css";
type ButtonProps = {
  children: string
};

const Button: React.FC<any> = ({children}:ButtonProps) => {
  return <span className="button"><a>{children}</a></span>;
};

export default Button;
