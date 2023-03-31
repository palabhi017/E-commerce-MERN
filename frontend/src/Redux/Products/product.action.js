import { getProdata } from "./product.api";
import * as types from "./product.type";

export const protypes = (payload) => {
  return { type: types.PRODUCTS_TYPE, payload: payload };
};

export const getProducts = (getProductsParam) => async (dispatch) => {
  dispatch({ type: types.PRODUCTS_LOAD });
  try {
    let data = await getProdata(getProductsParam);
    if (data) {
      dispatch({ type: types.PRODUCTS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: types.PRODUCTS_ERROR });
  }
};
