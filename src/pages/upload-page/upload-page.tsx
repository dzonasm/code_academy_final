import React, { FormEvent, useRef, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { selectCurrentUser } from "../../redux/selectors/selectors";


interface IImageUrlInputObj {
  imageUrl: string;
}

export const UploadPage = () => {
  const [imageUrlInputs, setImageUrlInputs] = useState<IImageUrlInputObj[]>([
    { imageUrl: "" },
  ]);

  const titleRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const userId: string | undefined = useSelector(selectCurrentUser)?.uid

  const inputs = imageUrlInputs.map((input, idx) => {
    return (
      <div>
        <Form.Floating key={idx} className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            onChange={(e)=>handleUlrInputChange(e as React.ChangeEvent<HTMLInputElement>, idx)}
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

  const handleUlrInputChange = (event: React.ChangeEvent<HTMLInputElement>,idx: number): void =>{
      let values:IImageUrlInputObj[] = [...imageUrlInputs];
        values[idx].imageUrl = event.target.value
  }

  const handleAddField = () => {
    setImageUrlInputs([...imageUrlInputs, { imageUrl: "" }]);
  };
  const handleRemoveField = (idx: number) => {
    if (imageUrlInputs.length === 1) return;
    setImageUrlInputs(imageUrlInputs.splice(idx, 1));
  };


// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
        title: titleRef.current?.value,
        price: priceRef.current?.value,
        description: descriptionRef.current?.value,
        photos: imageUrlInputs,
        userId
    });
    // db.collection("products").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });
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
