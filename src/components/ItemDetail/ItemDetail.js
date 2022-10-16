import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

export const ItemDetail = ({productos}) => {
    const onAdd = (numero)=>{
        console.log(numero);
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
        <ItemCount stock={10} onAdd={onAdd} inicial={1} className='contador'/>
    </div>
        
    )
}
