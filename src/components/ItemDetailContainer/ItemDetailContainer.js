import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();
console.log(id);


const URL_BASE = 'https://fakestoreapi.com/products';
const URL_PRODUCTO = `${URL_BASE}/${id}`


useEffect(()=>{
    setTimeout(() => {
        fetch(URL_PRODUCTO)
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .catch((error)=>{console.log(error);})
        .finally(setLoading(false))
    }, 2000);
},[]);


    return (
        <>
        <div className='container'>
            {loading ? <Spinner animation="border"/> : <ItemDetail productos={productos}/>}  
        </div>      
        </>
    )
}

