import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from 'react-bootstrap/Spinner';
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase";
import { getDocs, collection, query, where } from 'firebase/firestore';




const ItemListContainer = (mensaje) =>{


    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true);

    const {id}=useParams();

    const productCollection = collection(db, 'productos');
    const q = id ? query(productCollection, where('category', '==', id)) : productCollection;


    useEffect(() => {    
        getDocs(q)
        .then((result)=>{
            const listProducts = result.docs.map(item=>{
                return {
                    ...item.data(),
                    id: item.id,
                };
            });
            setProductos(listProducts);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(setLoading(false));
    }, [id]);
    
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

