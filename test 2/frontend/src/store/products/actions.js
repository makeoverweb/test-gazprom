import { createAsyncAction } from "typesafe-actions";

const GET_PRODUCTS_REQUEST = "@common/GET_PRODUCTS_REQUEST";
const GET_PRODUCTS_SUCCESS = "@common/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAILURE = "@common/GET_PRODUCTS_FAILURE";

export const getProductsAction = createAsyncAction(
  [GET_PRODUCTS_REQUEST],
  [GET_PRODUCTS_SUCCESS, (response) => response],
  [GET_PRODUCTS_FAILURE, (error) => error]
)();

const GET_PRODUCT_BY_ID_REQUEST = "@common/GET_PRODUCT_BY_ID_REQUEST";
const GET_PRODUCT_BY_ID_SUCCESS = "@common/GET_PRODUCT_BY_ID_SUCCESS";
const GET_PRODUCT_BY_ID_FAILURE = "@common/GET_PRODUCT_BY_ID_FAILURE";

export const getProductByIdAction = createAsyncAction(
  [
    GET_PRODUCT_BY_ID_REQUEST,
    (id) => ({
      id,
    }),
  ],
  [GET_PRODUCT_BY_ID_SUCCESS, (response) => response],
  [GET_PRODUCT_BY_ID_FAILURE, (error) => error]
)();
