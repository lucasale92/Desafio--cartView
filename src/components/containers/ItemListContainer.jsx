import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Spinnerner from "react-bootstrap/Spinner";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  //Productos
  const getData = () =>{
    fetch ('../../api.json')
    .then(response => response.json())
    .then(data => {
      if (categoryId){
        setProductos(data.filter(productos => productos.categoria === categoryId));
      } else {
        setProductos(data);
      }
    })
  }
  useEffect(() => {
    setLoading(true);
    const fetch= new Promise ((resolve, reject) => {
      resolve(getData())
    })
    fetch
    .finally(() => setLoading(false));
    }, [categoryId]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          Cargando...
          <Spinnerner animation="grow" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
}

