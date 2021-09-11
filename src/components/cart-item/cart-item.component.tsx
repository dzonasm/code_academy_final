import React from "react";

import "./cart-item.styles.scss";
import { ICartProductProps } from "../../common/interfaces/cart-product";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { reducerActions } from "../../redux/types/types";

const CartItem: React.FC<ICartProductProps> = ({ product }) => {
  const { title, photos, price, quantity, description } = product;

  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch({
      type: reducerActions.REMOVE_SINGLE_ITEM_FROM_CART,
      payload: product,
    });
  };

  const addItem = () => {
    dispatch({ type: reducerActions.ADD_ITEM_TO_CART, payload: product });
  };
  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photos[0]} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p className="my-0">{(Number(price) * quantity).toFixed(2)}$</p>
        <div className="d-flex align-items-center justify-content-center p-2">
          <FontAwesomeIcon
            onClick={removeItem}
            className="cursor-pointer"
            size="xs"
            icon={faMinus}
          />
          <span className="px-2">{quantity}</span>
          <FontAwesomeIcon
            onClick={addItem}
            size="xs"
            className="cursor-pointer"
            icon={faPlus}
          />
        </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
