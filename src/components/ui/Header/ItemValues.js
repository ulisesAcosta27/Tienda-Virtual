import React from "react";
import { Link } from "react-router-dom";
import "./ItemValues.css";

const ItemValues = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Link to={item.link} key={item.name}>
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default ItemValues;
