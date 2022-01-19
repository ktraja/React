const updCart = (cart, newItem, updAction) => {
  let idFound;
  if (cart.cartItems.length > 0) {
    idFound = cart.cartItems.findIndex((xx) => xx.id === newItem.id);
  } else {
    idFound = -1;
  }

  if (idFound > -1) {
    if (updAction === "ADD") {
      cart.cartItems[idFound].qty++;
      cart.totQty++;
      cart.totVal = cart.totVal + newItem.price;
    } else {
      cart.cartItems[idFound].qty--;
      const delIndex = cart.cartItems.findIndex((xx) => xx.qty === 0);
      if (delIndex > -1) {
        cart.cartItems.splice(delIndex, 1);
      }
      cart.totQty--;
      cart.totVal = cart.totVal - newItem.price;
    }
  } else {
    cart.cartItems.push({ ...newItem, qty: 1 });
    cart.totQty++;
    cart.totVal = cart.totVal + newItem.price;
  }

  return cart;
};

export default updCart;
