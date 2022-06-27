import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = ({ producto }) => {
  return (
    
<Card className="imagen">
<Link to={"/item/" + producto.id}>
            <img src={producto.img} className="card-img-top" alt="imagen"/>  
          </Link>

  <Card.Body>
    <Card.Title>{producto.name}</Card.Title>
    <Card.Text className="cardText">
      {producto.details}
      <br />
      Precio: ${producto.price}
      <br />
      Stock: {producto.stock}
    </Card.Text>

  </Card.Body>
</Card>
  )
}
export default Item;
