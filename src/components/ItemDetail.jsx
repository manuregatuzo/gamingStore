import React from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";




const ItemDetail = ({item}) => {
  return (
    <div className="py-3 ">
            <div className="card" >
                <img src={item.thumbnail} className="card-img-top" alt="nombre" />
            <div className="card-body">
                <h5 className="card-title text-center">{item.title}</h5>
                <p className="card-text text-center">${item.price}</p>
                <ItemCount  stock={5} initial={0} />
                <div className="text-center py-4">
                <a href="#" className="btnGral">Comprar</a>
                </div>
                <Link to={"/"} className="btnGral">Volver al inicio</Link>
            </div>
        </div>
        </div>
  )
}

export default ItemDetail