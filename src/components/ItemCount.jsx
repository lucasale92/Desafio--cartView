import React, { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [qty, setQty] = useState(inicial);

  const sumar = () => {
    qty < stock && setQty(qty + 1) 
  };
  const restar = () => {
    qty > 1 && setQty(qty - 1)
  };

  return (
    <div>
      <h2>{qty}</h2>
      <button onClick={sumar} className="botonUno">
        +
      </button>
      <button onClick={restar} className="botonDos">
        -
      </button>
      <button
        onClick={() => {
          onAdd(qty);
        }}
        className="botonCuatro"
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
