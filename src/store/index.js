import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import debts from "./debts";
import balance from "./balance";
import rows from "./rows";
import error from "./error";

const reducer = combineReducers({debts, balance, rows, error});
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
