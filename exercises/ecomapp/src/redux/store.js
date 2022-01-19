import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import httpReducer from "./reducers/httpReducer";
import cartReducer from "./reducers/cartReducer";

const combiReducer = combineReducers({ authReducer, httpReducer, cartReducer });
const store = createStore(combiReducer);

export default store;
