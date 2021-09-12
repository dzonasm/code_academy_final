import { Container } from "react-bootstrap";
import { ProductDetails } from "../../components/product-details/product-details.component";

export const SingleProductPage = () => {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis vitae impedit adipisci veritatis delectus, deleniti dolorum recusandae, sed quia beatae totam animi nisi assumenda accusantium.";

  return (
    <Container>
      <ProductDetails
        id={"123"}
        description={desc}
        title={"wasuup"}
        price={"3.88"}
        photos={[
          "https://slp-statics.astockcdn.net/static_assets/staging/21fall/EMEA/photos/curated-collections/Card-1.jpg?width=580",
          "https://i.pinimg.com/236x/33/72/7d/33727d49449f596b3416cd4d5a314ad9--memes.jpg",
          "https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg",
        ]}
      />
    </Container>
  );
};
