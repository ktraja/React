const cartReducer = (
  state = { cartItems: [], totQty: 0, totVal: 0 },
  action
) => {
  if (action.type === "CART") {
    return {
      cartItems: action.payload.cartItems,
      totQty: action.payload.totQty,
      totVal: action.payload.totVal,
    };
  } else {
    return state;
  }
};

export default cartReducer;
