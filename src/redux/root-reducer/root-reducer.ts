import { combineReducers } from "redux";

import shoppingCartReducer from "../shopping-cart/shopping-cart.reducer";
import userReducer from "../userReducer/user-reducer";

const rootReducer = combineReducers({
	user: userReducer,
	shoppingCart: shoppingCartReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
