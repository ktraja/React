import { LOGIN, DATA, CART, CATEGORY } from "./actionTypes";

export const login_api = (ipData) => ({
  type: LOGIN,
  payload: {
    user: ipData.user,
    data: ipData.data,
    status: ipData.status,
  },
});

export const data_api = (ipData) => ({
  type: DATA,
  payload: {
    error: ipData.errorMessage,
    data: ipData.data,
    status: ipData.status,
  },
});

export const cart_api = (ipData) => ({
  type: CART,
  payload: {
    cartItems: ipData.cartItems,
    totQty: ipData.totQty,
    totVal: ipData.totVal,
  },
});

export const category_api = (ipData) => ({
  type: CATEGORY,
  payload: {
    catArray: ipData.catArray,
  },
});
