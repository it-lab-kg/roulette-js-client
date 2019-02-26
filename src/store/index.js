import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import baseReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    baseReducer,
    composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
