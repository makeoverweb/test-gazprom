import { combineReducers } from "redux";
import { productsReducer, productReducer } from "./products/reducers";

const reducers = {
  list: productsReducer,
  item: productReducer,
};

export const reducer = combineReducers(reducers);
