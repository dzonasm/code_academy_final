import { useEffect } from "react";
import "../../common/common-styles.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { reducerActions } from "../../redux/types/types";
import "../../common/common-styles.styles.scss";
import { Product } from "../../components/product/product";
import { ProductGrid } from "../../components/product-grid/product-grid";
import { Container } from "react-bootstrap";
import { selectAllProducts } from "../../redux/selectors/selectors";
import { v4 as uuid_v4 } from "uuid";


export const Homepage = () => {
  const allProducts = useSelector(selectAllProducts);

  const pageProducts = allProducts.map(
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
  );

  return (
    <Container>
      <ProductGrid>
        {pageProducts}
      </ProductGrid>
    </Container>
  );
};
