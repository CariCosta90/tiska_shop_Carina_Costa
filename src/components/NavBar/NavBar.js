import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/tiska.gif"
import './NavBar.css'
import headerBackground from "../../assets/header_background_1.jpg"
import {Link, NavLink} from "react-router-dom";

const Navbar = () =>{


const categorias = [
    {nombre: "electronics", id:0, ruta:"/categoria/electronics"},
    {nombre: "jewelery", id:1, ruta:"/categoria/jewelery"},
    {nombre: "men's clothing", id:2, ruta:"/categoria/men's clothing"},
    {nombre: "women's clothing", id:3, ruta:"/categoria/women's clothing"},
]

    return (
        <header style={{backgroundImage:`url(${headerBackground})`}}>
            <Link to="/">
            <img src={logo} alt="Logo de la tienda"/>
            </Link>
            <h1 className="nombreEmpresa">Tiska</h1>
            <nav>
                <ul>{
                    categorias.map((categoria)=>{
                        return <NavLink key={categoria.id} to={categoria.ruta} className="btn-one">{categoria.nombre}</NavLink>
                    })}
                </ul>
            </nav>
            <Link to="/cart">
            < CartWidget />    
            </Link>
        </header>
    );
}

export default Navbar;

/* pendiente:
verificar styling de tab active
*/