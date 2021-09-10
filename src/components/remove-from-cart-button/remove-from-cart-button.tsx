import React from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../../common/interfaces/product-interface";
import { reducerActions } from "../../redux/types/types";
import CustomButton from "../custom-button/custom-button.component";

import "./remove-button-styles.css";

interface IProps {
  product: IProduct;
  buttonText: string;
}

const RemoveFromCartButton: React.FC<IProps> = ({ product, buttonText }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: reducerActions.REMOVE_ITEM_FROM_CART, payload: product });
  };

  return (
    <CustomButton
      remove
      buttonText={buttonText}
      handleClick={handleClick}
    ></CustomButton>
  );
};

export default RemoveFromCartButton;
