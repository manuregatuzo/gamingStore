import React from "react";
import Item from "./Item";

const ItemList = ({items}) =>{

    return(
        <div>
            {items.map(item => 
            <div className="cardCss" key={item.id}> 
                <Item  id={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio}/>
            </div>
            )}
        </div>
    )
}


export default ItemList;