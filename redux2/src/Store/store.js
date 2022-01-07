import { combineReducers, createStore } from "redux";

// const initialState = { toggleCart: false };
const uiReducer = (state = { toggleCart: true }, action) => {
  if (action.type === "toggle") {
    return { toggleCart: !state.toggleCart };
  }
  return state;
};

const cartReducer = (state = { items: [], totQty: 0, totAmt: 0 }, action) => {
  if (action.type === "additem") {
    let cartItems = state.items;
    let cartTotQty = state.totQty;
    let cartTotAmt = state.totAmt;

    const newItem = action.item;
    const existingItem = cartItems.find((item) => item.id === newItem.id);

    if (!existingItem) {
      cartItems.push({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        quantity: newItem.quantity,
      });
    } else {
      existingItem.quantity = existingItem.quantity + newItem.quantity;
    }
    cartTotAmt = cartTotAmt + newItem.price * newItem.quantity;
    cartTotQty = cartTotQty + newItem.quantity;

    return { items: cartItems, totQty: cartTotQty, totAmt: cartTotAmt };
  }

  if (action.type === "delitem") {
    let cartItems = state.items;
    let cartTotQty = state.totQty;
    let cartTotAmt = state.totAmt;

    const newItem = action.item;
    const existingItem = cartItems.find((item) => item.id === newItem.id);

    if (existingItem.quantity === 1) {
      cartItems = cartItems.filter((item) => item.id !== newItem.id);
    } else {
      existingItem.quantity--;
    }
    cartTotAmt = cartTotAmt - newItem.price;
    cartTotQty = cartTotQty - 1;

    return { items: cartItems, totQty: cartTotQty, totAmt: cartTotAmt };
  }
  return state;
};

const rootReducer = combineReducers({ uiReducer, cartReducer });
const store = createStore(rootReducer);

export default store;
