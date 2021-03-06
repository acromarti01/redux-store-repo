import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";

const StoreProvider = ({ value = [], ...props }) => {
  return <Provider store={store} {...props} />
};

export default StoreProvider;
