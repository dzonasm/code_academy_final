import { useState } from "react";
import "../../common/common-styles.styles.scss";
import "../../common/common-styles.styles.scss";
import { Product } from "../../components/product/product";
import { ProductGrid } from "../../components/product-grid/product-grid";
import { Container } from "react-bootstrap";
import { v4 as uuid_v4 } from "uuid";
import { IProduct } from "../../common/interfaces/product-interface";
import { RouteChildrenProps } from "react-router";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors/selectors";


interface MatchParams {
  id: string;
}
interface IProps extends RouteChildrenProps<MatchParams> {}

export const FavoritesPage : React.SFC<IProps>= () => {
  const products = useSelector(selectFavorites)
  
  return (
    <Container>
      <ProductGrid>
        {products ? products.map(
      ({ userId, photos, description, price, title, id }) => {
        return (<div key={uuid_v4()} className=" d-flex justify-content-center">
          <Product
            id={id}
            userId={userId}
            description={description}
            title={title}
            price={price}
            photos={photos}
          />
        </div>)
      }
    ) : <>"No Favs prbly"</>}
      </ProductGrid>
    </Container>
  );
};
