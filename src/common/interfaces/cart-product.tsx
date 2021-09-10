import { IProduct } from "./product-interface";

export interface ICartProduct extends IProduct {
    quantity: number;
}

export interface ICartProductProps {
    product: ICartProduct;
}