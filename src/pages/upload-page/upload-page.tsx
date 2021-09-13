import React, { FormEvent, useRef, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/selectors";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { RoutingConstants } from "../../common/routingContstants";
import { IProduct } from "../../common/interfaces/product-interface";
import { db } from "../../firebase";
import { reducerActions } from "../../redux/types/types";

interface IImageUrlInputObj {
  imageUrl: string;
}

const UploadPage: React.SFC<RouteComponentProps> = ({ history }) => {
  const [imageUrlInputs, setImageUrlInputs] = useState<IImageUrlInputObj[]>([
    { imageUrl: "" },
  ]);

  const dispatch = useDispatch();

  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const userId: string | undefined = useSelector(selectCurrentUser)?.uid;

  const inputs = imageUrlInputs.map((_input, idx) => {
    return (
      <div key={idx}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            onChange={(e) =>
              handleUlrInputChange(
                e as React.ChangeEvent<HTMLInputElement>,
                idx
              )
            }
            type="url"
            placeholder="Image Url"
            required
          />
          <label htmlFor="floatingInputCustom">Image Url</label>
        </Form.Floating>
        <Button onClick={() => handleRemoveField(idx)}>remove field</Button>
        <Button onClick={() => handleAddField()}>add field</Button>
      </div>
    );
  });

  const handleUlrInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ): void => {
    let values: IImageUrlInputObj[] = [...imageUrlInputs];
    values[idx].imageUrl = event.target.value;
  };

  const handleAddField = () => {
    setImageUrlInputs([...imageUrlInputs, { imageUrl: "" }]);
  };
  const handleRemoveField = (idx: number) => {
    if (imageUrlInputs.length === 1) return;
    setImageUrlInputs(imageUrlInputs.splice(idx, 1));
  };

  const getProducts = async () => {
    const products: IProduct[] = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      products.push(data as IProduct);
    });
    console.log(products);
    dispatch({ type: reducerActions.SET_PRODUCTS, payload: products });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: titleRef.current?.value,
      price: priceRef.current?.value,
      description: descriptionRef.current?.value,
      photos: imageUrlInputs.map((url) => url.imageUrl),
      userId,
    };
    try {
      const docRef = await addDoc(collection(db, "products"), data);
      console.log("Document written with ID: ", docRef.id);
      getProducts();
      history.push(RoutingConstants.HOME);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="Title"
            ref={titleRef}
            maxLength={30}
            minLength={10}
            required
          />
          <label htmlFor="floatingInputCustom">Title</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="number"
            placeholder="Price $"
            ref={priceRef}
            required
          />
          <label htmlFor="floatingInputCustom">Price $</label>
        </Form.Floating>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Product description (max. 200 symbols)"
        >
          <Form.Control
            className="mb-3"
            as="textarea"
            placeholder="Product description (max. 200 symbols)"
            style={{ height: "100px" }}
            ref={descriptionRef}
            maxLength={200}
            required
          />
        </FloatingLabel>
        {inputs}
        <input type="submit" />
      </Form>
    </Container>
  );
};

export default withRouter(UploadPage);
