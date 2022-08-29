import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
    return(
        <div className="container fondo-header">
            <ul className="nav d-flex align-items-center">
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
                    <a className="nav-link disabled link-header">Ofertas</a>
                </li>
                </ul>
        </div>
    )
}


export default Header