

//the function takes all the existing cart items  and the item to add

import { ICartProduct } from "../common/interfaces/cart-product"

export const addItemToCart = (cartItemsArray: ICartProduct[], cartItemToAdd: ICartProduct) =>{
    const existingCartItem = cartItemsArray.find((cartItem: ICartProduct) => cartItem.id === cartItemToAdd.id)
    console.log(' the existing item' + existingCartItem)


    if (existingCartItem && existingCartItem.quantity > 0){
        return cartItemsArray.map((cartItem: ICartProduct) =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
    }


    return [...cartItemsArray, {...cartItemToAdd, quantity: 1}]
}

export const removeSingleItemFromCart = (cartItemsArray: ICartProduct[], cartItemToRemove: ICartProduct) =>{
    const existingCartItem = cartItemsArray.find((cartItem: ICartProduct) => cartItem.id === cartItemToRemove.id)
    console.log(' the existing item' + existingCartItem)


    if (existingCartItem && existingCartItem.quantity > 0){
        return cartItemsArray.map((cartItem: ICartProduct) =>
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem)
    }


    return [...cartItemsArray, {...cartItemToRemove, quantity: -1}]
}


