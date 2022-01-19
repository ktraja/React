import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
  //   const authReducer = useSelector((state) => state.authReducer);
  const cartReducer = useSelector((state) => state.cartReducer);

  return (
    <div>
      Cart:
      {cartReducer.cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShoppingCart;
