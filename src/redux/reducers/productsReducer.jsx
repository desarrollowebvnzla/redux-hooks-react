import { handleActions } from "redux-actions";
import {
  hadleApiStart,
  getProductsSuccess,
  handleApiError,
} from "../constants";

export default handleActions(
  {
    [hadleApiStart]: (state, action) => ({
      ...state,
      error: null,
      loading: true,
    }),

    [getProductsSuccess]: (state, action) => ({
      ...state,
      loading: false,
      products: action.payload,
    }),

    [handleApiError]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
  { products: null, error: null, loading: true }
);
