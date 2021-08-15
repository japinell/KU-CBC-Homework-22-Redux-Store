//
//  Redux store - Keeps track of the application state
//
import { createStore } from "redux";
import { reducer } from "./reducers";
//
export default createStore(reducer);
//
