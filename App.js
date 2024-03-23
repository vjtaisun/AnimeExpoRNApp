import React from 'react';
import { Provider } from "react-redux";
import {AppContainer} from "./app/navigation"
import store from './app/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
};

export default App;