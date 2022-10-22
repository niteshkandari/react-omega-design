import * as React from "react";
import "./Text.css";
type TextProps = {
  children: string;
  color: null | string;
  size:string
};

const Text: React.FC<any> = ({ children, color = null, size = '' }: TextProps) => {
  return (
    <p className="para" style={{ color: `${color != null && color}`, fontSize:size }}>
      {children}
    </p>
  );
};

export default Text;
