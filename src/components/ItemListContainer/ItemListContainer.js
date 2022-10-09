import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemListContainer = (props) =>{
    const onAdd = (numero)=>{
        console.log(numero);
    }
    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemCount stock={10} onAdd={onAdd} inicial={1}/>
        </div>
    );
}

export default ItemListContainer;
