import React from 'react'
import ItemCount from '../Item/ItemCount'
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { CartContext } from '../Context/Context';



  const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)    
    const [counter, setCounter] = useState(0)  


    const onAdd = (counter) => {
      setCounter(counter)
      addItem(item, counter)
    }


  return (
    <div className ="py-3">
            <div className="cardDetail d-flex " >
                <img src={item.imagen} className="w-50" alt="nombre" />
            <div className="card-body cardDescription">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center">${item.precio}</p>
                {counter === 0 ? <ItemCount initial={1} stock={5} onAdd={onAdd} /> : <Link to={"/cart"} className="btn fondo_naranja btnEliminar">Ir al Carrito</Link>}
            </div>
        </div>
        </div>
  )
}

export default ItemDetail