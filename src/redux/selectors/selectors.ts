import { RootState } from "../root-reducer/root-reducer";
import { ICartProduct } from "../../common/interfaces/cart-product";
import { UserDTO } from "../../common/DTO/user.dto";

export const selectCurrentUser = (state: RootState): UserDTO | null => state.user.currentUser;
export const selectShoppingCartProducts = (state: RootState): ICartProduct[]=> state.shoppingCart.products;
