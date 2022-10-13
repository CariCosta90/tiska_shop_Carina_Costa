import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/tiska.gif"
import './NavBar.css'
import headerBackground from "../../assets/header_background_1.jpg"

const Navbar = () =>{
    return (
        <header style={{backgroundImage:`url(${headerBackground})`}}>
            <img src={logo} alt="Logo de la tienda"/>
            <h1>Tiska</h1>
            <nav>
                <ul>
                    <a href="#" className="btn-one">Blusas</a>  
                    <a href="#" className="btn-one">Vestidos</a>
                    <a href="#" className="btn-one">Zapatos</a>
                    <a href="#" className="btn-one">Carteras</a>
                </ul>
            </nav>
            < CartWidget />
        </header>
    );
}

export default Navbar;
