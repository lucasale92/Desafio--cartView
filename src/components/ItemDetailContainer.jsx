import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
 
  const getData = () => {
    fetch ('../../api.json')
    .then(response => response.json())
    .then(data => {
      if (id){
        setDetail(data.find(productos => String(productos.id) === id));
      }
}
    )
    }
    useEffect(() => {
      setLoading(true);
      const fetch= new Promise ((resolve, reject) => {
        resolve(getData())
      })
    fetch
    .then(setLoading (true))
    .finally(() => setLoading(false));
  }, [id]);

  
  return (
    <div className="container my-5">
      {loading ? <h2>{loading}</h2> : <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
