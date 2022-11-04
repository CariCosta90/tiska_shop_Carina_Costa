import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, cantidad)=>{
        console.log(`esta funcion agrega ${cantidad} de ${item.title} al carrito, su precio es $${item.price}`);
        /* esta funcion tendria que agregar los elementos al cart como? con un map? no tengo ni idea de como mostrar los productos en el cart aca*/
    }
    const deleteItem = (id)=>{
        /* este id deberia venir de un boton eliminar del carrito */
        console.log('esta funcion borra del carrito');
        setCart(cart.filter(item => item.id !== id));
    }

    const IsInCart = (id) =>{
        /* va a recibir un id y tiene que indicar true or false (de donde saca ese cart para recorrer? este es del useState), si true, no agrega, si false agrega tiene que buscar el id del elemento que estamos agregando en la lista de elementos existente en el cart*/
        return cart.some(item => item.id === id);
    }

    useEffect(() => {
        let cantidad = 0;
        let totalC = 0;

        cart.forEach(element => {
            cantidad += element.cantidad;
            totalC += element.price * element.cantidad
        });
        setQty(cantidad);
        setTotal(totalC);
    }, [cart]);
    

    const clear = ()=>{
        console.log('esta funcion borra todo el carrito');
        setCart([]); 
        setQty(0);
        setTotal(0);
        /* esta funcion se deberia disparar con un onclic en un boton del cart */
    }


    return (
        <>
        <CartContext.Provider value={{cart, qty, total, addItem, deleteItem, clear, IsInCart}}>{children}</CartContext.Provider>
        </>
    )
}
