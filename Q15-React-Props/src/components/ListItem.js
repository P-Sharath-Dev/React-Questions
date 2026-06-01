import React, { Component } from "react";

// Complete this Component
const ListItem = ({ name, link, icon, bgColor }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
      }}
    >
      <a href={link} style={{ backgroundColor: bgColor }} className="list-item">
        <span>{name}</span>
        <img src={icon} alt={name} />
      </a>
    </div>
  );
};

export default ListItem;
