import React from "react";
import "./style.css";

// This file exports both the Argument Title, Argument and Sides components

export function CardTitle({ children }) {
  return (
    <div className="list-overflow-container">
      <h3 className="list-group">{children}</h3>
    </div>
  );
}

export function CardItem({ children }) {
    return <h6 className="list-group-item">{children}</h6>;
  }
  

export function SideItemOne({ children }) {
  return <p className="list-group-item">{children}</p>;
}

export function SideItemTwo({ children }) {
    return <p className="list-group-item">{children}</p>;
  }