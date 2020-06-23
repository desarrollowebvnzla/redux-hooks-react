import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import auth from '../reducers/authReducer';
import products from "../reducers/productsReducer";
// import shopingCart from '../reducers/ShopingCartReducer';

const reducer = combineReducers({
  // auth,
  products,
  // shopingCart,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
