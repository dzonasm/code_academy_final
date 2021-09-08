import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { Button, Card } from "react-bootstrap";
import { IProductProps } from "../../common/interfaces/product-interface";
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export const Product = ({
  price,
  photos,
  description,
  title,
  id,
  userName,
}: IProductProps): JSX.Element => {
    const logId = (id: string): void =>{
        console.log(id);
    }

  return (
    <Card className="m-2 m-sm-1" style={{ width: "18rem" }}>
      <Card.Img className="p-2" variant="top" src="https://c8.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg" />
      <Card.Body>
        <Card.Title>{title}
        <p>{price}</p>
        </Card.Title>
        <Card.Text className='truncate'>
         {description}
        </Card.Text>
        <Button className="position-absolute top-0 end-0 m-2" variant="outline-primary">
            <FontAwesomeIcon icon={faHeart}/>
        </Button>
        <Button  onClick={() => logId(id)} variant="primary">Add to cart
        </Button>
        
      </Card.Body>
    </Card>
  );
};
