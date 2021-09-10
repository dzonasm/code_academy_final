import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer/root-reducer";
import RemoveFromCartButton from "../remove-from-cart-button/remove-from-cart-button";
import WidgetItem from "./widget-items/widget-items";
import { v4 as uuuidv4 } from "uuid";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import "./shopping-cart-widget.styles.scss";
import { selectShoppingCartProducts } from "../../redux/selectors/selectors";
import { ICartProduct } from "../../common/interfaces/cart-product";
import { RoutingConstants } from "../../common/routingContstants";

function CartWidget(props: any) {
 
  const cartState = useSelector(selectShoppingCartProducts);

  const dispatch = useDispatch();

  return (
    <div className="shopping-cart-widget">
      <div className="cart-items">
        {cartState.length > 0 ? (
          cartState.map((product: ICartProduct) => {
            const {id, title, description, photos, price, quantity} = product
            return (
              <div key={uuuidv4()} className="cart-item-and-button">
                <WidgetItem
                  id={id}
                  title={title}
                  description={description}
                  photos={photos}
                  price={price}
                  quantity={quantity}
                />
                <RemoveFromCartButton buttonText="remove" product={product} />
              </div>
            );
          })
        ) : (
          <h3 className="cart-empty-text">Cart empty</h3>
        )}
      </div>
      <div className="cart-button-container">
        <CustomButton
          handleClick={() => {
            props.history.push(RoutingConstants.CHECKOUT);
          }}
          buttonText="Checkout"
        />
      </div>
    </div>
  );
}

export default withRouter(CartWidget);
