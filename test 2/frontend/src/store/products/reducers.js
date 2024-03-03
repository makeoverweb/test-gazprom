import { createReducer, getType } from "typesafe-actions";
import { getProductsAction, getProductByIdAction } from "./actions";

const initialStateOfProducts = {
  data: [],
  error: null,
  loading: false,
};

// list
const productsReducer = createReducer(initialStateOfProducts, {
  [getType(getProductsAction.request)]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(getProductsAction.success)]: (state, { payload }) => ({
    data: payload,
    error: null,
    loading: false,
  }),
  [getType(getProductsAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});

const initialStateOfProduct = {
  data: {},
  error: null,
  loading: false,
};

//item
const productReducer = createReducer(initialStateOfProduct, {
  [getType(getProductByIdAction.request)]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(getProductByIdAction.success)]: (state, { payload }) => ({
    data: payload,
    error: null,
    loading: false,
  }),
  [getType(getProductByIdAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});

export { productsReducer, productReducer };
