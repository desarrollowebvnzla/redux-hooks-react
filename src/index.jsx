import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductListPage from "./pages/products/ProductListPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import ShoppingCart from "./pages/cart/ShoppingCart";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductListPage />
        </Route>

        <Route path="/products" exact>
          <ProductListPage />
        </Route>

        <Route path="/product/:id" exact>
          <ProductDetailPage />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
