import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Carrito from "../Cart/Carrito"
import { useContext } from "react";
import { CartContext } from "../Context/Context";

const Header = () => {
    const {cart} = useContext(CartContext) 
    return(
        <div className=" fondo-header ">
            <ul className="nav d-flex align-items-center prueba">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="48" alt="logo"/></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-header" to={"/Nosotros"}>Quienes somos</Link>
                </li>
                <div>
                {cart.length <= 0 ? null : <li><Carrito /></li>}
                
                </div>                
                </ul>
        </div>
    )
}


export default Header