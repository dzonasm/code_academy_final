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
import { IProduct } from "../../common/interfaces/product-interface";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const Homepage = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector(selectAllProducts);

  useEffect(() => {
    (async () => {
		const products: IProduct[]=[];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        products.push(doc.data() as IProduct)
      });
	  console.log(products)
	  dispatch({type: reducerActions.SET_PRODUCTS, payload: products})
    })();
  }, []);

  const pageProducts = allProducts.map(
    ({ userId, photos, description, price, title }) => {
      return (<div key={uuid_v4()} className=" d-flex justify-content-center">
        <Product
          id={uuid_v4()}
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
