import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import {Link} from "react-router-dom";
import { CartContext } from '../../Context/CartContext';

export const ItemDetail = ({productos}) => {

    const [agregarCarrito, setAgregarCarrito] = useState(true);
    const {addItem} = useContext(CartContext);

    /* recordar importar , IsInCart, cart cuando tenga el elemento stock en el objeto productos, esto es para que el stock se contabilice antes de ir al carrito y no se exceda el stock en el carrito mismo, no es obligatorio */

/*     let stock = 0;
    if(IsInCart(productos.id)){
        const found = cart.find(item => item.id === productos.id);
        stock = productos.stock - found.cantidad;
    }else{
        stock = productos.stock;
    } */

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
        {/* cuando tenga creado el stock en firebase ahi cambio por stock={stock} porque ahora no existe productos.stock */}
        {agregarCarrito ? <ItemCount stock={10} onAdd={onAdd} inicial={1} className='contador'/> :  <Link to="/cart"><button>Finalizar Compra</button></Link>}  
    </div>
        
    )
}
