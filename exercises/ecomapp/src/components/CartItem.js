import React from "react";

const CartItem = (props) => {
  const addItemHandler = () => {};
  const delItemHandler = () => {};

  return (
    <div className="prod">
      <div>{props.prod.prod}</div>
      <img src={require(`${props.prod.img}`)} alt="prod" className="pic" />
      <div className="brPr">
        <span>{props.prod.brand}</span>
        <span>${props.prod.price}</span>
      </div>
      <div className="btnBox">
        <button className="btn" onClick={delItemHandler}>
          -
        </button>
        {/* {prodQty} */}
        <button className="btn" onClick={addItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
