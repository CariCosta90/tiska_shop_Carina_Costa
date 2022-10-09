import React, {useState} from 'react';
import './itemCount.css'

export const ItemCount = ({stock, onAdd, inicial}) => {
    const [contar, setContar] = useState(inicial);

    const agregarContador = ()=>{
        if(contar<stock){
            setContar(contar+1);
        }

    }
    const restarContador = ()=>{
        if(contar>1){
            setContar(contar-1);
        }
    }
    const agregarAlCarrito = ()=>{
        if(stock!==0){
            onAdd(contar);
        }
    }
    return (
        <div className='contadorProductos'>
            <div className='contador'>
                <button onClick={restarContador}>-</button>
                <p>{contar}</p>
                <button onClick={agregarContador}>+</button>
            </div>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

