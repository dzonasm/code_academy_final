import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { IProduct } from "../../common/interfaces/product-interface";
import { v4 } from "uuid";
import './product-details.scss'

export const ProductDetails = ({
  title,
  photos,
  price,
  description,
}: IProduct): JSX.Element => {
  const pictures: JSX.Element[] = photos.map((photo: string) => {
    return (
      <Carousel.Item key={v4()}>
        <img className="d-block w-100 carousel__image" src={photo} alt={title} />
      </Carousel.Item>
    );
  });
  return (
    <div className="product-details__container p-4">
      <Carousel>{pictures}</Carousel>
      <Card className="text-center">
        <Card.Header>{price} $</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
