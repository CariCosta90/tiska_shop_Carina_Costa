import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import {Link} from "react-router-dom";
import { CartContext } from '../../Context/CartContext';

export const ItemDetail = ({productos}) => {

    const [agregarCarrito, setAgregarCarrito] = useState(true);
    const {addItem} = useContext(CartContext);


    const onAdd = (count)=>{
        addItem(productos, count);
        setAgregarCarrito(false);
    }
    
    return (
    <div className='detailContainer'>
        <h1 className='titulo'>{productos.title}</h1>
        <img src={productos.image} alt={productos.title} className='imagen'/>
        <p className='descripcion'>{productos.description}</p>
        <div className='precio'>
            <p>{productos.price}</p>
            <div></div>
        </div>
        {agregarCarrito ? <ItemCount stock={productos.Stock} onAdd={onAdd} inicial={1} className='contador'/> :  <Link to="/cart"><button>Finalizar Compra</button></Link>}  
    </div>
        
    )
}
