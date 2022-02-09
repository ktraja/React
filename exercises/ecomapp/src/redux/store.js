import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import httpReducer from "./reducers/httpReducer";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";

const combiReducer = combineReducers({
  authReducer,
  httpReducer,
  cartReducer,
  categoryReducer,
});
const store = createStore(combiReducer);

export default store;
