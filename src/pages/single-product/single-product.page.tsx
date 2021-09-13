import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { RouteChildrenProps } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import  ProductDetails from "../../components/product-details/product-details.component";
import { db } from "../../firebase";
import { IProduct } from "../../common/interfaces/product-interface";


interface MatchParams {
  id: string;
}
interface IProps extends RouteChildrenProps<MatchParams> {}

export const SingleProductPage: React.SFC<IProps> = ({match}) => {

  const [product, setProduct] = useState<IProduct | null>(null)

  const id: string = match?.params.id || ""

  const docRef = doc(db, "products", id);
  
  useEffect(()=>{
    (async ()=> {
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data() as IProduct)
    })()
  },[])

  console.log(match?.params.id)

  return (
    <Container>
      {product ? 
      <ProductDetails
      userId={product.userId}
        id={id}
        description={product.description}
        title={product.title}
        price={product.price}
        photos={product.photos}
      />
      : "Loading, m8"
    }
    </Container>
  );
};
