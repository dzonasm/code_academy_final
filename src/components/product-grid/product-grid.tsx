import React from 'react'
import {IChildrenProps} from '../../common/interfaces/children-interface'
import './product-grid.scss'


export const ProductGrid = ({children}: IChildrenProps): JSX.Element => {

    return(
        <div className="product-grid">{children}</div>
    )
    
}