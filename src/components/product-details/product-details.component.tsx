import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { IProductProps } from "../../common/interfaces/product-interface";
import { uuid } from "uuidv4";
import './product-details.scss'

export const ProductDetails = ({
  title,
  userName,
  photos,
  price,
  description,
  id,
}: IProductProps): JSX.Element => {
  const pictures: JSX.Element[] = photos.map((photo: string) => {
    return (
      <Carousel.Item key={uuid()}>
        <img className="d-block w-100 carousel__image" src={photo} alt={title} />
      </Carousel.Item>
    );
  });
  return (
    <div>
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
