import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { IProduct } from "../../common/interfaces/product-interface";
import { v4 } from "uuid";
import "./product-details.scss";
import { reducerActions } from "../../redux/types/types";
import { useDispatch, useSelector } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { selectCurrentUser } from "../../redux/selectors/selectors";
import { RoutingConstants } from "../../common/routingContstants";
import {  RouteComponentProps, withRouter } from "react-router";

interface IProps extends IProduct, RouteComponentProps<any>{}

const ProductDetails: React.FC<IProps> = ({ title, photos, price, description, id, userId, history }): JSX.Element => {


  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const handleAddToCart = () => {
    dispatch({
      type: reducerActions.ADD_ITEM_TO_CART,
      payload: { title, price, description, photos, id },
    });
  };

  const handleDeleteProduct = async (): Promise<void> => {
    await deleteDoc(doc(db, "products", id));
    dispatch({
      type: reducerActions.REMOVE_PRODUCT_FROM_PRODUCTS,
      payload: [{ title, price, description, photos, id }],
    });
    history.push(RoutingConstants.HOME)
  };


  const pictures: JSX.Element[] = photos.map((photo: string) => {
    return (
      <Carousel.Item key={v4()}>
        <img
          className="d-block w-100 carousel__image"
          src={photo}
          alt={title}
        />
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
          <Button onClick={handleAddToCart} variant="success">
            Add to cart
          </Button>
          {currentUser?.uid === userId ? (
            <Button onClick={handleDeleteProduct} variant="danger">
              Delete product
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(ProductDetails)
