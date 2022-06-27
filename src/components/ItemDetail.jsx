import React from "react";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ detail }) => {

  const [counter, setCounter] = useState(true)
  const {isInCart, addItem} = useContext(CartContext)

  const onAdd = (qty) => {
    setCounter (false)

    isInCart (detail.id)
    addItem (detail, qty);
}
  return (
    <>
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 p-2 text-center">
            <img src={detail.img} alt='imagen' />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="detail-nombre">{detail.name}</h2>
              <p className="detail-precio">Precio: $ {detail.price}</p>
              <p className="detail-detalle">Descripcion: {detail.details}</p>
              <p className="detail-details">Stock disponible: {detail.stock}</p>
              {counter? <ItemCount qty={1} setQty={5}  onAdd={onAdd} producto={detail.name}/> 
              :
              <>
                <Link to ={"/cart"}><Button variant="success" size="lg">Ir al Carrito</Button>{' '}</Link>
                <Link to = {"/"}><Button variant="danger" size="lg">Seguir comprando</Button>{' '}</Link>
              </>
              }
          </div> 
          </div>
        </>
    </>
  );
};
export default ItemDetail;
