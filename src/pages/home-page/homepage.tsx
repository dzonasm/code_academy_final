import { useEffect } from "react";
import "../../common/common-styles.styles.scss";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import "../../common/common-styles.styles.scss";
import { Product } from "../../components/product/product";
import { ProductGrid } from "../../components/product-grid/product-grid";
import { Container } from "react-bootstrap";
export const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      dispatch({ type: userActionTypes.SET_USER, payload: user })
    );

    return unsubscribe;
  }, []);

  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis vitae impedit adipisci veritatis delectus, deleniti dolorum recusandae, sed quia beatae totam animi nisi assumenda accusantium.";

  
  return (
    <Container >
	  <ProductGrid>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"4.99"}
          photos={["https://st.depositphotos.com/2212674/3353/i/600/depositphotos_33530773-stock-photo-work-is-getting-more-and.jpg"]}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"345"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"]}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"657"}
          description={desc}
          title={"wasuup"}
          price={"12"}
          photos={["https://ichef.bbci.co.uk/news/976/cpsprodpb/16646/production/_116681719_whatsubject.jpg"]}
        />
      </div>

	  </ProductGrid>
	  
    </Container>
  );
};
