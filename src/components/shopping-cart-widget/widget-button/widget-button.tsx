import {
  faCarAlt,
  faCartPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/root-reducer/root-reducer";
import { selectShoppingCartProducts } from "../../../redux/selectors/selectors";
import CartWidget from "../shopping-cart-widget";

import "./widget-button.styles.css";

export const WidgetButton = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleClick = (): void => {
    console.log("clicked");
    setCartVisible(!cartVisible);
  };

  const cartItems = useSelector(selectShoppingCartProducts);
  const numberOfItemsInCart: number = cartItems.reduce(
    (accumulatedNumber: number, item) => accumulatedNumber + item.quantity,
    0
  );

  return (
    <div
      className="widget-toggle d-flex justify-content-center align-items-center"
      
    >
      <FontAwesomeIcon onClick={handleClick} color="green" size="lg" icon={faCartPlus} />

      <span className="item-count p-1">{numberOfItemsInCart}</span>
      {cartVisible ? <CartWidget /> : null}
    </div>
  );
};
