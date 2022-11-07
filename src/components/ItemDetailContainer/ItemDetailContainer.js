import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css";
import {getDoc, collection, doc} from "firebase/firestore"
import {db} from "../../firebase/firebase";

export const ItemDetailContainer = () => {

const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();

/* const URL_BASE = 'https://fakestoreapi.com/products';
const URL_PRODUCTO = `${URL_BASE}/${id}` */


/* useEffect(()=>{
    setTimeout(() => {
        fetch(URL_PRODUCTO)
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .catch((error)=>{console.log(error);})
        .finally(setLoading(false))
    }, 2000);
},[]); */
useEffect(()=>{

    const productCollection = collection (db, 'productos')
    const refDoc = doc (productCollection, id)

    getDoc(refDoc)
    .then (result =>{
        setProductos({
            id: result.id,
            ...result.data()
        })
        })
    .catch((error) =>{
    console.log ("error")
    })
    .finally (() =>{
    setLoading (false)
    })
        
    },[id])


    return (
        <>
        <div className='container'>
            {loading ? <Spinner animation="border"/> : <ItemDetail productos={productos}/>}  
        </div>      
        </>
    )
}

