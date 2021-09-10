import React from 'react'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import AddRemoveSingleItem from '../add-remove-single-item/add-remove-single-item.component'

import './cart-item.styles.scss'
import { ICartProduct, ICartProductProps } from '../../common/interfaces/cart-product'


const CartItem : React.FC<ICartProductProps> = ({product})=> {
    const {title, photos, price, quantity, id} = product
    return(
        <div className="cart-item-container">
            <img src={photos[0]} alt={title}></img>
            <div className="cart-item-text">
    <h3 className='title'>{title}</h3>
    <p className='price'>Price: {price} $</p>
        {quantity > 0 ? <div>
            <p>Qty: {quantity}</p>
        <p className="full-price">Bendra kaina: {quantity * (Number(price))} $</p>
            </div>
             : null}
            <AddRemoveSingleItem product={product}/>
            <RemoveFromCartButton buttonText='Remove' product={product}/>
            </div>
        </div>
    )
}

export default CartItem