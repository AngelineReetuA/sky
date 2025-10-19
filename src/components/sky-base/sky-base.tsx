import React from "react";
import "./sky-base.css";

type SkyBaseProps = {
  children?: React.ReactNode;
};

const SkyBase = ({ children }: SkyBaseProps) => {
  return (
    <div className="sky-container">
      {children}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
      <div className="ground"></div>
    </div>
  );
};

export default SkyBase;
