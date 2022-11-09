import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, cantidad)=>{
        if(IsInCart(item.id)){
            const modificado = cart.map((producto) => {
                if (producto.id === item.id) {
                    producto.cantidad += cantidad;
                    }
                    return producto;
                });
                setCart(modificado);
        }else{
            setCart([...cart, {...item, cantidad}])
        }
        
    }
    const deleteItem = (id)=>{
        setCart(cart.filter(item => item.id !== id));
    }

    const IsInCart = (id) =>{
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
        setCart([]); 
        setQty(0);
        setTotal(0);
    }


    return (
        <>
        <CartContext.Provider value={{cart, qty, total, addItem, deleteItem, clear, IsInCart}}>{children}</CartContext.Provider>
        </>
    )
}
