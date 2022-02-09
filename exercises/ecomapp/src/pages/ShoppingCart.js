import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import classes from "./ShoppingCart.module.css";
import { useHistory } from "react-router";
const ShoppingCart = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const [ordFlg, setOrdFlag] = useState(false);
  const history = useHistory();

  const orderHandler = () => {
    setOrdFlag(!ordFlg);
  };

  const bkShopHandler = () => {
    history.replace("/shop");
  };

  return (
    <Fragment>
      <button type="button" className={classes.btn} onClick={bkShopHandler}>
        Back to Shop
      </button>
      <div className={classes.mainBox}>
        <h2>Order Summary: {cartReducer.totQty} items in Cart</h2>
        {!ordFlg && (
          <div>
            {cartReducer.cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <h2>Total : ${cartReducer.totVal}</h2>
            <hr />
          </div>
        )}
        {ordFlg && (
          <div>
            {cartReducer.cartItems.map((item) => (
              <div>
                <div className={classes.ordpg}>
                  <span>
                    {item.qty} x {item.prod}
                  </span>
                  <span>{item.qty * item.price}</span>
                </div>
                <hr />
              </div>
            ))}

            <div className={classes.ordpg}>
              <h2>Total :</h2>
              <h2>{cartReducer.totVal}</h2>
            </div>
          </div>
        )}
      </div>

      <button type="button" className={classes.btn} onClick={orderHandler}>
        {ordFlg ? "Back to Cart" : "Place Order"}
      </button>
    </Fragment>
  );
};

export default ShoppingCart;
