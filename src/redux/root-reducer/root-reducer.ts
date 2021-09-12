import { combineReducers } from "redux";
import productsReducer from "../products-reducer/products-reducer";

import shoppingCartReducer from "../shopping-cart/shopping-cart.reducer";
import userReducer from "../userReducer/user-reducer";

const rootReducer = combineReducers({
	user: userReducer,
	shoppingCart: shoppingCartReducer,
	products: productsReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
