import {
  reducerActions,
  IProductsReducerState,
  productsAction,
} from "../types/types";

const INITIAL_STATE = {
  allProducts: [],
};

const productsReducer = (
  state: IProductsReducerState = INITIAL_STATE,
  action: productsAction
) => {
  switch (action.type) {
    case reducerActions.SET_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
      };
    case reducerActions.REMOVE_PRODUCT_FROM_PRODUCTS:
      return {
        ...state,
        allProducts: state.allProducts.filter((product) => {
          return product !== action.payload[0];
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
