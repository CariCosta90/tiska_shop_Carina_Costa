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

    /* armamos las rutas */

/*     const URL_BASE = 'https://fakestoreapi.com/products'; */
/*     const URL_CATEGORIA = `${URL_BASE}/category/${id}` */

    const productCollection = collection(db, 'productos');
    const q = id ? query(productCollection, where('category', '==', id)) : productCollection;

/*     useEffect(()=>{
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
 */
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
    
    console.log(productos);
    
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

