import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = [
            {"id": 1, "nombre":"RTX3080ti", "imagen":"https://http2.mlstatic.com/D_NQ_NP_952946-MLA48036524485_102021-W.jpg", "precio":"25000"},
            {"id": 2, "nombre":"RTX3090", "imagen":"https://http2.mlstatic.com/D_NQ_NP_996917-MLA51231565062_082022-W.jpg", "precio":"45000"},
            {"id": 3, "nombre":"RX6900", "imagen":"https://http2.mlstatic.com/D_NQ_NP_627045-MLA45143526259_032021-O.jpg", "precio":"27000"}
        ] 
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos);
            }, 2000);
        });

        promesa.then((respuesta) =>{
            setItems(respuesta);      
        });
    
    },[])

    return(
        <div>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer;