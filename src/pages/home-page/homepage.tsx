import { useEffect } from "react";
import "../../common/common-styles.styles.scss";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import "../../common/common-styles.styles.scss";
import { Product } from "../../components/product/product";
import { ProductGrid } from "../../components/product-grid/product-grid";
import {ProductDetails} from '../../components/product-details/product-details.component'
export const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      dispatch({ type: userActionTypes.SET_USER, payload: user })
    );

    return unsubscribe;
  }, []);

  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis vitae impedit adipisci veritatis delectus, deleniti dolorum recusandae, sed quia beatae totam animi nisi assumenda accusantium quos repellendus! Labore eos beatae commodi enim provident assumenda exercitationem modi officiis reprehenderit excepturi aut ratione a molestias facere cupiditate nostrum, incidunt soluta molestiae? Minus nulla, enim tenetur nostrum vitae distinctio nemo perferendis doloremque hic aliquid qui, et est magnam quia obcaecati quos voluptatum accusamus aspernatur modi. Temporibus.";

  return (
    <div className=" h-100 container">
      <div className="row">
        <h1>Drawing perspective</h1>
      </div>
	  <ProductGrid>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["https://st.depositphotos.com/2212674/3353/i/600/depositphotos_33530773-stock-photo-work-is-getting-more-and.jpg"]}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["https://st.depositphotos.com/2212674/3353/i/600/depositphotos_33530773-stock-photo-work-is-getting-more-and.jpg"]}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["https://st.depositphotos.com/2212674/3353/i/600/depositphotos_33530773-stock-photo-work-is-getting-more-and.jpg"]}
        />
      </div>

	  </ProductGrid>
	  <ProductDetails userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["https://slp-statics.astockcdn.net/static_assets/staging/21fall/EMEA/photos/curated-collections/Card-1.jpg?width=580", 'https://i.pinimg.com/236x/33/72/7d/33727d49449f596b3416cd4d5a314ad9--memes.jpg', 'https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg']}/>
    </div>
  );
};
