import { RootState } from "../root-reducer/root-reducer";
import firebase from 'firebase/app'
import { IProduct } from "../../common/interfaces/product-interface";
import { ICartProduct } from "../../common/interfaces/cart-product";

export const selectCurrentUser = (state: RootState):firebase.User | null => state.user.currentUser;
export const selectShoppingCartProducts = (state: RootState): ICartProduct[]=> state.shoppingCart.products;
