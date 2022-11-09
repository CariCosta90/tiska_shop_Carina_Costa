import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../Context/CartContext";
import "./CartWidget.css"

const CartWidget = () =>{

    const {qty} = useContext(CartContext);

    return (
        <>
        <div className="cartImg">
            {qty === 0 ? '': <p className="qty">{qty}</p> }
                <ShoppingCartIcon color="secondary" fontSize="large"/>
        </div>
        </>
    );
}

export default CartWidget;