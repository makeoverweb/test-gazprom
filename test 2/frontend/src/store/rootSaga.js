import { all } from "redux-saga/effects";
import { watchProductsSaga } from "./products/effects";

export default function* rootSaga() {
  yield all([watchProductsSaga()]);
}
