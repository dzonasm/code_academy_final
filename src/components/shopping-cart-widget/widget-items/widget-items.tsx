import React from 'react'
import {ICartProduct} from '../../../common/interfaces/cart-product'
import './widget-items-styles.css'

const WidgetItem = ({ title, price, photos, quantity} : ICartProduct) =>{
    return(
        <div className="cart-item">
            <div 
            className='widget-img' 
            style={{
                backgroundImage: `url(${photos[0]})`
            }}/>
    <h3 className='cart-item-title'>{title}</h3>
        <p className='cart-item-price'>{quantity} x {price} $</p>
        </div>
    )
}

export default WidgetItem;