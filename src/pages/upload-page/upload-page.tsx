import React, { FormEvent, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

interface IImageUrlInputObj {
  imageUrl: string;
}

export const UploadPage = () => {
  const [imageUrlInputs, setImageUrlInputs] = useState<IImageUrlInputObj[]>([
    { imageUrl: "" },
  ]);

  const inputs = imageUrlInputs.map((input, idx) => {
    return (
      <div>
        <Form.Floating key={idx} className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="url"
            placeholder="Image Url"
            value={input.imageUrl}
          />
          <label htmlFor="floatingInputCustom">Image Url</label>
        </Form.Floating>
        <Button onClick={()=>handleRemoveField(idx)}>remove field</Button>
        <Button onClick={()=>handleAddField()}>add field</Button>
      </div>
    );
  });

  const handleAddField = () => {
    setImageUrlInputs([...imageUrlInputs, { imageUrl: "" }]);
  };
  const handleRemoveField = (idx: number) => {
    setImageUrlInputs(imageUrlInputs.splice(idx, 1));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="Title"
          />
          <label htmlFor="floatingInputCustom">Title</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="number"
            placeholder="Price $"
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
          />
        </FloatingLabel>
        {inputs}
        <input type="submit" />
      </Form>
    </Container>
  );
};
