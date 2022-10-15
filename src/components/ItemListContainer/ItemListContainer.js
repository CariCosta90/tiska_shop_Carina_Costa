import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from 'react-bootstrap/Spinner';
import './ItemListContainer.css'


const ItemListContainer = (mensaje) =>{


    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {                    
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .catch((error)=>{console.log(error);})
        .finally(setLoading(false))
        }, 2000);
    },[]);


    return(
        <>
        {/* <h2>{mensaje.greeting}</h2> */}
        <div className="cardContainer">
            {loading ? 
                <Spinner animation="grow" />
            : <ItemList productos={productos}/> } 
        </div>
        </>
    );
}

export default ItemListContainer;


