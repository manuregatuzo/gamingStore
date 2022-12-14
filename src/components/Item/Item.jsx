import React from "react";
import { Link } from "react-router-dom";



const Item = ({item}) =>{
    return(
        
        <div className="py-3">
            <div className="card" >
                <div className="imgContainer">

                <img src={item.imagen} className="card-img-top imgContainer" alt="nombre" />
                </div>
            <div className="card-body">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center">${item.precio}</p>
                <div className="text-center py-4">
                <Link className="btnGral" to={`/item/${item.id}` }>Ver detalle</Link>                
                </div>                
            </div>
        </div>
        </div>
    )
}


export default Item;