//
//  Application state provider
//
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}

export { StoreProvider };
