import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { Button, Card } from "react-bootstrap";
import { IProductProps } from "../../common/interfaces/product-interface";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Product = ({
  price,
  photos,
  description,
  title,
  id,
  userName,
}: IProductProps): JSX.Element => {
  const logId = (id: string): void => {
    console.log(id);
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
        <Button onClick={() => logId(id)} variant="success">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};
