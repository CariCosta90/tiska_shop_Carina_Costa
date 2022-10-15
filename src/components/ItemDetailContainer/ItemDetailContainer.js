import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () => {
    
const [productos, setProductos] = useState([]);

const [loading, setLoading] = useState(true);

useEffect(()=>{
    setTimeout(() => {
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .catch((error)=>{console.log(error);})
        .finally(setLoading(false))
    }, 2000);
},[]);


    return (
        <>
        {loading ? <Spinner animation="border" /> : <ItemDetail productos={productos}/>}        
        </>
    )
}

