import { useEffect } from "react";
import "../../common/common-styles.styles.scss";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import "../../common/common-styles.styles.scss";
import { Product } from "../../components/product/product";
import { ProductGrid } from "../../components/product-grid/product-grid";
export const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      dispatch({ type: userActionTypes.SET_USER, payload: user })
    );

    return unsubscribe;
  }, []);

  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis vitae impedit adipisci veritatis delectus, deleniti dolorum recusandae, sed quia beatae totam animi nisi assumenda accusantium quos repellendus! Labore eos beatae commodi enim provident assumenda exercitationem modi officiis reprehenderit excepturi aut ratione a molestias facere cupiditate nostrum, incidunt soluta molestiae? Minus nulla, enim tenetur nostrum vitae distinctio nemo perferendis doloremque hic aliquid qui, et est magnam quia obcaecati quos voluptatum accusamus aspernatur modi. Temporibus consequuntur dicta in ipsum praesentium nostrum sunt quis, suscipit reprehenderit soluta quam porro inventore enim. Modi veniam unde ipsum, accusamus ullam, eligendi cumque laboriosam praesentium iusto aliquam iste illo cupiditate laudantium repellendus dolores ipsa odio! Dolores deleniti rem, minima soluta harum beatae adipisci eaque maxime iure nam obcaecati itaque maiores sit natus quam voluptatum aliquid quasi asperiores quaerat consequuntur molestias incidunt dolorum laudantium eveniet. Perferendis eos alias ullam consequatur temporibus esse minus incidunt quia, numquam debitis.";

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
          photos={["hello"]}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["hello"]}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <Product
          userName={"hey"}
          id={"123"}
          description={desc}
          title={"wasuup"}
          price={"3.88"}
          photos={["hello"]}
        />
      </div>

	  </ProductGrid>
    </div>
  );
};
