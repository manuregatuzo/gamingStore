import React from "react";
import logo from "../assets/img/logo.png";
import Carrito from "./Carrito";

const Header = () => {
    return(
        <div className=" fondo-header ">
            <ul className="nav d-flex align-items-center prueba">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="logo"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-header" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-header" href="#">Quienes somos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  link-header" href="#">Ofertas</a>
                </li>
                <div>
                <li><Carrito /></li>
                </div>                
                </ul>
        </div>
    )
}


export default Header