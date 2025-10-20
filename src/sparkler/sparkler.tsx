import React, { useState } from "react";
import "./sparkler.css";

const Sparkler: React.FC<{ burn: boolean }> = ({ burn }) => {
  const originalPos = {
    x: window.innerWidth * 0.85,
    y: window.innerHeight * 0.85,
  };
  const [pos, setPos] = useState(originalPos);

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      setPos(originalPos);
    }
  };

  return (
    <div
      className={`sparkler ${burn ? "burning" : ""}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%) rotate(-25deg)",
        transition: dragging ? "none" : "all 0.4s ease",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="stick" />
      <div className="spark-zone">
        <div className="spark s1" />
        <div className="spark s2" />
        <div className="spark s3" />
        <div className="spark s4" />
        <div className="spark s5" />
      </div>
    </div>
  );
};

export default Sparkler;
