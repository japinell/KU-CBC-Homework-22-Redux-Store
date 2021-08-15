import React, { createContext, useContext } from "react";
import { Provider } from "react-redux";
import { useProductReducer } from "./reducers";
import store from "./store";

function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}

export { StoreProvider };
