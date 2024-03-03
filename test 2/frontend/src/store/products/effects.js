import { call, put, takeEvery } from "redux-saga/effects";
import { getProductByIdAction, getProductsAction } from "./actions";
import { getProductById, getProducts } from "../../network/services";

function* getProductsSaga() {
  try {
    const response = yield call(getProducts);
    yield put(getProductsAction.success(response));
  } catch (error) {
    yield put(getProductsAction.failure(error));
  }
}
function* getProductByIdSaga({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(getProductById, id);
    yield put(getProductByIdAction.success(response));
  } catch (error) {
    yield put(getProductByIdAction.failure(error));
  }
}

export function* watchProductsSaga() {
  yield takeEvery(getProductsAction.request, getProductsSaga);
  yield takeEvery(getProductByIdAction.request, getProductByIdSaga);
}
