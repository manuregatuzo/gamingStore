import React from "react";
import ItemCount from "./ItemCount"



const Item = ({id, nombre, imagen, precio}) =>{
    return(
        
        <div className="py-3">
            <div className="card" >
                <img src={imagen} className="card-img-top" alt="nombre" />
            <div className="card-body">
                <h5 className="card-title text-center">{nombre}</h5>
                <p className="card-text text-center">${precio}</p>
                <ItemCount  stock={5} initial={0} />
                <div className="text-center py-4">
                <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                
            </div>
        </div>
        </div>
    )
}


export default Item;