import { RootState } from "../root-reducer/root-reducer";
import { ICartProduct } from "../../common/interfaces/cart-product";
import { UserDTO } from "../../common/DTO/user.dto";
import { IProduct } from "../../common/interfaces/product-interface";

export const selectCurrentUser = (state: RootState): UserDTO | null => state.user.currentUser;
export const selectShoppingCartProducts = (state: RootState): ICartProduct[]=> state.shoppingCart.products;
export const selectAllProducts = (state: RootState): IProduct[]=> state.products.allProducts;
//@ts-ignore
export const selectFavorites = (state: RootState): IProduct[]=> state.favorites.favorites;
