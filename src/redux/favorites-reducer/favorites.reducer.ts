import {
    reducerActions,
    productsAction,
    IFavoritesReducer,
    favoritesAction,
  } from "../types/types";
  
  const INITIAL_STATE : IFavoritesReducer = {
    favorites: [],
  };
  
  const favoritesReducer = (
    state: IFavoritesReducer = INITIAL_STATE,
    action: favoritesAction
  ) => {
    switch (action.type) {
      case reducerActions.ADD_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case reducerActions.REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter((product) => {
            return product.id !== action.payload.id;
          }),
        };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  