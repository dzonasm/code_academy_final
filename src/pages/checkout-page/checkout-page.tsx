import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductGrid } from '../../components/product-grid/product-grid'
import ShoppingCart from '../../components/shopping-cart/shopping-cart'


export const CheckoutPage: React.FC = () => {
    return(
       <Container>
           <ProductGrid>
                <ShoppingCart/>
           </ProductGrid>
       </Container>
    )
    
}