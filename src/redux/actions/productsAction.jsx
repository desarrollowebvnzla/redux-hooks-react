import {
  hadleApiStart,
  getProductsSuccess,
  handleApiError,
} from "../constants";
import api from "../../services/api";

export const getProductsAction = () => async (dispatch) => {
  dispatch(hadleApiStart());

  try {
    const products = await api(`products`, "get", null, null);
    console.log(products);

    dispatch(getProductsSuccess(products.data.data));
  } catch (error) {
    console.log(error.response);
    dispatch(handleApiError(error));
  }
};

export const getProductAction = (id) => async (dispatch) => {
  dispatch(hadleApiStart());

  try {
    const product = await api(`products/${id}`, "get", null, null);
    console.log(product.data.data);

    dispatch(getProductsSuccess(product.data.data));
  } catch (error) {
    console.log(error.response);
    dispatch(handleApiError(error));
  }
};
