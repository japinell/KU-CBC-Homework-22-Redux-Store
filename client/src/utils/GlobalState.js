import React, { createContext, useContext } from "react";
import { Provider } from "react-redux";
import { useProductReducer } from "./reducers";
import store from "./store";

function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}

export { StoreProvider };

//const StoreContext = createContext();
//const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
