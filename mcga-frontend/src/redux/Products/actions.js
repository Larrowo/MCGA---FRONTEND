import { SET_PRODUCTS } from "./types";

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};
