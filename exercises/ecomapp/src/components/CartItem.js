import React from "react";
import classes from "../pages/ShoppingCart.module.css";

import { useSelector, useDispatch } from "react-redux";
import useHttp from "../api/useHttp";
import addCart from "../api/addCart";
import { cart_api } from "../redux/actions";
import updCart from "../api/updCart";

const CartItem = (props) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);
  const { sendRequest } = useHttp(addCart);
  const cart = { ...cartReducer };
  const { user } = authReducer;

  const addItemHandler = () => {
    sendRequest(updCart(cart, props.item, "ADD"), user);

    dispatch(
      cart_api({
        type: "CART",
        cartItems: cart.cartItems,
        totQty: cart.totQty,
        totVal: cart.totVal,
      })
    );
  };
  const delItemHandler = () => {
    sendRequest(updCart(cart, props.item, "DEL"), user);

    dispatch(
      cart_api({
        type: "CART",
        cartItems: cart.cartItems,
        totQty: cart.totQty,
        totVal: cart.totVal,
      })
    );
  };

  return (
    <div>
      <div className={classes.prod}>
        <img
          src={require(`${props.item.img}`)}
          alt="prod"
          className={classes.pic}
        />
        <div>{props.item.prod}</div>

        <div className={classes.btnBox}>
          <button className="btn" onClick={delItemHandler}>
            -
          </button>
          {props.item.qty}
          <button className="btn" onClick={addItemHandler}>
            +
          </button>
        </div>
        <div className={classes.brPr}>
          <span>${props.item.price * props.item.qty}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
