import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootSaga from "./rootSaga";
import { reducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
