import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ICartProductProps } from "../../common/interfaces/cart-product";
import { IProduct } from "../../common/interfaces/product-interface";
import { reducerActions } from "../../redux/types/types";



const AddRemoveSingleItem: React.FC<ICartProductProps> = ({product}) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch({ type: reducerActions.REMOVE_SINGLE_ITEM_FROM_CART, payload: product });
  };

  const addItem = () => {
    dispatch({ type: reducerActions.ADD_ITEM_TO_CART, payload: product });
  };

  return (
    <div className="add-remove-items-container">
      <Button onClick={removeItem}>-1</Button>
      <Button onClick={addItem}>+1</Button>
    </div>
  );
};

export default AddRemoveSingleItem;
