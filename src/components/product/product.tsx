import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import { IProduct } from "../../common/interfaces/product-interface";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { reducerActions } from "../../redux/types/types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RoutingConstants } from "../../common/routingContstants";
import { selectCurrentUser, selectFavorites } from "../../redux/selectors/selectors";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";


export const Product: React.FC<IProduct> = (product): JSX.Element => {
  const { price, photos, description, title, id, userId } = product;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const favorites = useSelector(selectFavorites)

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
      payload: [product],
    });
  };

  const checkIfFavorite = (): boolean =>{
    const currentFavorites = [...favorites]
    console.log(currentFavorites, 'current')

    if(currentFavorites.some(favorite =>{ 
      console.log(favorite.id , id, "this the ids pham ")
      console.log(favorite.userId , userId, "this the userids pham ")
      return favorite.id == id && favorite.userId == userId})) return true;
    return false
  }

  const handleFavorite = (): void =>{
    let isFavorite: boolean = checkIfFavorite();

    if(isFavorite) dispatch({type: reducerActions.REMOVE_FAVORITE, payload: { title, price, description, photos, id, userId }})

    if(!isFavorite) dispatch({type: reducerActions.ADD_FAVORITE, payload: { title, price, description, photos, id, userId }})

  }

  return (
    <Card className="m-2 m-sm-1" style={{ width: "18rem" }}>
      <Link to={`${RoutingConstants.SINGLE_PRODUCT}/${id}`}>
        <Card.Img className="p-2" variant="top" src={photos[0]} />
      </Link>
      <Card.Body>
        <Card.Title>
          {title}
          <p>{price} $</p>
        </Card.Title>
        <Card.Text className="truncate">{description}</Card.Text>
        <Button
         onClick={handleFavorite} 
          className="position-absolute top-0 end-0 m-3"
          variant={`${checkIfFavorite() ? 'danger' : 'outline-primary'}`}
        >
          <FontAwesomeIcon icon={faHeart} />
        </Button>
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
  );
};
