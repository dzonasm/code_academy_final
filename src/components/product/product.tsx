import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { Button, Card } from "react-bootstrap";
import { IProduct } from "../../common/interfaces/product-interface";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { reducerActions } from "../../redux/types/types";
import { useDispatch } from "react-redux";

export const Product = ({
  price,
  photos,
  description,
  title,
  id,
  userName,
}: IProduct): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(id);
    dispatch({type: reducerActions.ADD_ITEM_TO_CART, payload: {title, price, description, photos, id, userName} })
  };

  return (
    <Card className="m-2 m-sm-1" style={{ width: "18rem" }}>
      <Card.Img
        className="p-2"
        variant="top"
        src="https://slp-statics.astockcdn.net/static_assets/staging/21fall/EMEA/photos/curated-collections/Card-1.jpg?width=580"
      />
      <Card.Body>
        <Card.Title>
          {title}
          <p>{price}</p>
        </Card.Title>
        <Card.Text className="truncate">{description}</Card.Text>
        <Button
          className="position-absolute top-0 end-0 m-3"
          variant="outline-success"
        >
          <FontAwesomeIcon icon={faHeart} />
        </Button>
        <Button onClick={handleClick} variant="success">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};
