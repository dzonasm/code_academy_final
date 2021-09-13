import {shoppingCartAction,reducerActions, IShoppingCartState} from '../types/types'
import {addItemToCart, removeSingleItemFromCart} from '../../utilities/adding-to-cart-utils'

const INITIAL_STATE = {
    products : []
}

const shoppingCartReducer = (
    state: IShoppingCartState = INITIAL_STATE, 
    action : shoppingCartAction ) =>{
        
    switch(action.type){
        case reducerActions.ADD_ITEM_TO_CART:
            return{
                ...state, products: addItemToCart(state.products, action.payload)
            }
        case reducerActions.REMOVE_ITEM_FROM_CART:
            return{
                ...state, products: state.products.filter(product =>{
                    return(product !== action.payload)
                })
            }
        case reducerActions.REMOVE_SINGLE_ITEM_FROM_CART:{
            return{
                ...state, products: removeSingleItemFromCart(state.products, action.payload)
            }
        }
        case reducerActions.CHECKOUT:{
            return{
                ...state, products: []
            }
        }

        default:
            return state
        }
}

export default shoppingCartReducer;