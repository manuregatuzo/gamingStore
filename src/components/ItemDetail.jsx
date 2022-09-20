import React from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useState } from 'react';




  const ItemDetail = ({item}) => {
  
    const [cart, setCart] = useState([]);
  
    const addTooCart = () => {
    
      setCart([
        {
          item
        },
      ]);
      console.log(cart)
      
    };



  return (
    <div className ="py-3 ">
            <div className="card" >
                <img src={item.imagen} className="card-img-top" alt="nombre" />
            <div className="card-body">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center">${item.precio}</p>
                <ItemCount  stock={5} initial={0} />
                <div className="text-center py-4">
                <a onClick={addTooCart} className="btnGral">Añadir al carrito</a> 
                <a href="/cart" className="btnGral">Finalizar compra</a>
                </div>
                <Link to={"/"} className="btnGral">Volver al inicio</Link>
            </div>
        </div>
        </div>
  )
}

export default ItemDetail