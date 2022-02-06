import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../api/useHttp";
import addCart from "../api/addCart";
import { cart_api } from "../redux/actions";
import updCart from "../api/updCart";

const ProdList = (props) => {
  let [prodQty, updProdQty] = useState(0);
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);
  const { sendRequest } = useHttp(addCart);
  const cart = { ...cartReducer };
  const { user } = authReducer;
  const obj = cart.cartItems.find((item) => item.id === props.prod.id);

  useEffect(() => {
    if (obj) {
      updProdQty(obj.qty);
    }
  }, [obj]);

  const addItemHandler = () => {
    const cartObj = {
      item: updCart(cart, props.prod, "ADD"),
      user: user,
      reqType: "DATA",
    };
    sendRequest(cartObj);

    dispatch(
      cart_api({
        type: "CART",
        cartItems: cart.cartItems,
        totQty: cart.totQty,
        totVal: cart.totVal,
      })
    );

    updProdQty((prevQty) => {
      return prevQty + 1;
    });
  };

  const delItemHandler = () => {
    const cartObj = {
      item: updCart(cart, props.prod, "DEL"),
      user: user,
      reqType: "DATA",
    };
    sendRequest(cartObj);

    dispatch(
      cart_api({
        type: "CART",
        cartItems: cart.cartItems,
        totQty: cart.totQty,
        totVal: cart.totVal,
      })
    );
    updProdQty((prevQty) => {
      return prevQty - 1;
    });
  };

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
        {prodQty}

        <button className="btn" onClick={addItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProdList;
