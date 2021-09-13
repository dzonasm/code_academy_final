import { UserDTO } from "../../common/DTO/user.dto";
import { ICartProduct } from "../../common/interfaces/cart-product";
import { IProduct } from "../../common/interfaces/product-interface";

export interface IShoppingCartState {
  products: ICartProduct[];
}
export interface IProductsReducerState {
  allProducts: IProduct[];
}
export interface IFavoritesReducer {
  favorites: IProduct[];
}
export interface userReducerState {
  currentUser: UserDTO | null;
}

export enum userActionTypes {
  SET_USER = "SET_USER",
}

export type userReducerAction = {
  type: typeof userActionTypes.SET_USER;
  payload: UserDTO;
};


//add to cart button props
export interface addToCartButtonProps {
  item: ICartProduct;
  buttonText: string;
}

//remove from cart button props

export interface removeFromCartButttonProps {
  item: ICartProduct;
  buttonText: string;
}

export interface addRemoveComponentProps {
  item: ICartProduct;
}

//types of
export enum reducerActions {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_SINGLE_ITEM_FROM_CART = "REMOVE_SINGLE_ITEM_FROM_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  TOGGLE_CART_WIDGET_VISIBLE = "TOGGLE_CART_WIDGET_VISIBLE",
  SORT_BY_PRICE = "SORT_BY_PRICE",
  SET_PRODUCTS = "SET_PRODUCTS",
  REMOVE_PRODUCT_FROM_PRODUCTS = "REMOVE_PRODUCT_FROM_PRODUCTS",
  SELECT_PRODUCT = "SELECT_PRODUCT",
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  CHECKOUT= 'CHECKOUT'
}


// action type in shopping cart
export type shoppingCartAction = {
  type:
    | typeof reducerActions.ADD_ITEM_TO_CART
    | typeof reducerActions.REMOVE_ITEM_FROM_CART
    | typeof reducerActions.REMOVE_SINGLE_ITEM_FROM_CART
    | typeof reducerActions.CHECKOUT;
  payload: ICartProduct;
};

export type productsAction = {
    type: 
    | typeof reducerActions.SET_PRODUCTS
    | typeof reducerActions.REMOVE_PRODUCT_FROM_PRODUCTS
    | typeof reducerActions.SELECT_PRODUCT
    payload: IProduct[];
}
export type favoritesAction = {
    type: 
    | typeof reducerActions.ADD_FAVORITE
    | typeof reducerActions.REMOVE_FAVORITE
    payload: IProduct;
}

//action type for the adds reducer
export type addsReducerAction = {
  type: typeof reducerActions.ADD_NEW_ITEM;
  payload: IProduct;
};


