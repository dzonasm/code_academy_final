import firebase from 'firebase/app';
import { ICartProduct } from '../../common/interfaces/cart-product';
import {IProduct} from '../../common/interfaces/product-interface'

export interface IShoppingCartState {
    products: ICartProduct[];
}
export interface userReducerState {
	currentUser: firebase.User | null;
}


export enum userActionTypes {
	SET_USER = "SET_USER",
}

export type userReducerAction = {
	type: typeof userActionTypes.SET_USER;
	payload: firebase.User;
};

//sorting reducer state type
export interface sortingReducerState {
    sort: string
}


//add to cart button props
export interface addToCartButtonProps {
    item : ICartProduct
    buttonText: string
}

//remove from cart button props

export interface removeFromCartButttonProps {
    item : ICartProduct
    buttonText: string
}

export interface addRemoveComponentProps{
    item: ICartProduct
}

//types of
export enum reducerActions{
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_SINGLE_ITEM_FROM_CART = 'REMOVE_SINGLE_ITEM_FROM_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    TOGGLE_CART_WIDGET_VISIBLE = 'TOGGLE_CART_WIDGET_VISIBLE',
     SORT_BY_PRICE = 'SORT_BY_PRICE',

}

//action type for sorting reducer

export type sortingReducerAction = {type : typeof reducerActions.SORT_BY_PRICE, payload: string}

// action type in shopping cart
export type shoppingCartAction = {type : typeof reducerActions.ADD_ITEM_TO_CART | typeof reducerActions.REMOVE_ITEM_FROM_CART | typeof reducerActions.REMOVE_SINGLE_ITEM_FROM_CART, payload: ICartProduct}

//action type for the adds reducer
export type addsReducerAction = {type : typeof reducerActions.ADD_NEW_ITEM , payload: IProduct}


//action type for widget reducer
export type widgetReducerAction = { type: typeof reducerActions.TOGGLE_CART_WIDGET_VISIBLE, payload: boolean}




