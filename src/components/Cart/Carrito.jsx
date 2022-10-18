import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/Context";
import carrito from "../../assets/img/carrito.png";
import cesto from "../../assets/img/trash3.svg";

const Carrito = () =>{

        const {cartTotal, clear} = useContext(CartContext); 
    
        return (
            <div>
                <button type="button" className="btn fondo_naranja position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                    <img src={cesto} alt="Cesto" />
                </button>
                <Link to={"/cart"}>
                    <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                        <img width="50" src={carrito} alt="Carrito" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                    </button>
                </Link>
            </div>
        )
    }
    
    
    export default Carrito; 