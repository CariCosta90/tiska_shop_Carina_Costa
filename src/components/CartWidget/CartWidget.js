import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../Context/CartContext";

const CartWidget = () =>{

    const {qty} = useContext(CartContext);

    return (
        <>
        {/* agregar styling al p de qty */} 
        {qty === 0 ? '': <p>{qty}</p> }
            <ShoppingCartIcon color="secondary" fontSize="large"/>
        </>
    );
}

export default CartWidget;