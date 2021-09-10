import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import CartItem from '../cart-item/cart-item.component'
import {v4 as uuidv4} from 'uuid'
import './shopping-cart.styles.css'
import { selectShoppingCartProducts } from '../../redux/selectors/selectors'
import { ICartProduct } from '../../common/interfaces/cart-product'

function ShoppingCart() {

    const cartState = useSelector(selectShoppingCartProducts)

    const filteredItems = cartState.filter(product =>{
        return(
        product.quantity > 0
    )})
    
    return(
        <div className='shopping-cart-items-container'>
            {
                cartState.length > 0? filteredItems.map((product : ICartProduct) =>{
                    return(
                        <div key={uuidv4()}>
                            <CartItem
                                product={product}
                            />
                        </div>
                    )
                }) : <h2 className='cart-empty-text'>Cart is empty</h2>
            }
        </div>
        )
    }

    export default  ShoppingCart;
