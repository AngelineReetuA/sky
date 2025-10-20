import React from "react";
import "./sky-base.css";

type SkyBaseProps = {
  children?: React.ReactNode;
};

const SkyBase = ({ children }: SkyBaseProps) => {
  return (
    <div className="sky-container">
      {children}
      <div className="ground"></div>
    </div>
  );
};

export default SkyBase;
