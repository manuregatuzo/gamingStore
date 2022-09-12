import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import Destacado from './Destacado';



const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=placasdevideo&limit=9")    
    .then((respuesta) => respuesta.json())
    .then((data)=>{
        setTimeout(() =>{
        setItems(data.results)            
        }, 2000);
    }) 

    },[])

    return(
        <div>
            <div> 
                <Destacado />
            </div>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer;