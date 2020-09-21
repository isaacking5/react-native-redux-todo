import React, { Component } from "react";
import { Provider } from "react-redux";

import { store } from "./src/store";
import App from "./src/components/";

class TODO extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default TODO;
