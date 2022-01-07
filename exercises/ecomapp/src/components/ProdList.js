import React from "react";
import "../App.css";

const ProdList = (props) => {
  let prodQty = 0;
  return (
    <div className="prod">
      <div>{props.prod.prod}</div>
      <img src={require(`${props.prod.img}`)} alt="prod" className="pic" />
      <div className="brPr">
        <span>{props.prod.brand}</span>
        <span>${props.prod.price}</span>
      </div>
      <div className="btnBox">
        <button className="btn">-</button>
        {prodQty}
        <button className="btn">+</button>
      </div>
    </div>
  );
};

export default ProdList;
