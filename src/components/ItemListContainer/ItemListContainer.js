import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from 'react-bootstrap/Spinner';
import './ItemListContainer.css'
import { useParams } from "react-router-dom";



const ItemListContainer = (mensaje) =>{


    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true);

    const {id}=useParams();

    /* armamos las rutas */

    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CATEGORIA = `${URL_BASE}/category/${id}`

    useEffect(()=>{
        setLoading(true);
    },[id]);

    useEffect(()=>{       
        setTimeout(() => {  
        fetch(id === undefined ? URL_BASE : URL_CATEGORIA)
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .catch(()=>{console.log('error');})
        .finally(setLoading(false))
        }, 2000);
    },[id]);


    
    return(
        <>
        <h2>{mensaje.greeting}</h2>
        <div className="cardContainer">
            {loading ? 
                <Spinner animation="grow" />
            : <ItemList productos={productos}/>} 
        </div>
        </>
    );
}

export default ItemListContainer;

