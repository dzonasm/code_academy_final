import {shopItem} from "../redux/types/types"

//the function takes all the existing cart items  and the item to add

export const addItemToCart = (cartItemsArray: shopItem[], cartItemToAdd: shopItem) =>{
    const existingCartItem = cartItemsArray.find((cartItem: shopItem) => cartItem.id === cartItemToAdd.id)
    console.log(' the existing item' + existingCartItem)


    if (existingCartItem && existingCartItem.quantity > 0){
        return cartItemsArray.map((cartItem: shopItem) =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
    }


    return [...cartItemsArray, {...cartItemToAdd, quantity: 1}]
}

export const removeSingleItemFromCart = (cartItemsArray: shopItem[], cartItemToRemove: shopItem) =>{
    const existingCartItem = cartItemsArray.find((cartItem: shopItem) => cartItem.id === cartItemToRemove.id)
    console.log(' the existing item' + existingCartItem)


    if (existingCartItem && existingCartItem.quantity > 0){
        return cartItemsArray.map((cartItem: shopItem) =>
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem)
    }


    return [...cartItemsArray, {...cartItemToRemove, quantity: -1}]
}


