import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import {Link} from "react-router-dom";

export const ItemDetail = ({productos}) => {

    const [agregarCarrito, setAgregarCarrito] = useState(true);

    const onAdd = (numero)=>{
        console.log(numero);
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

        {agregarCarrito ? <ItemCount stock={10} onAdd={onAdd} inicial={1} className='contador'/> :  <Link to="/cart"><button>Finalizar Compra</button></Link>}  
    </div>
        
    )
}
