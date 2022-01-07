import { createStore, combineReducers } from "redux";
import listReducer from "../Reducers/listReducer";
import editReducer from "../Reducers/editReducer";

const combiReducer = combineReducers({ editReducer, listReducer });
const store = createStore(combiReducer);

export default store;
