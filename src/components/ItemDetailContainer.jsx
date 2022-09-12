import React from 'react'
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
const {id}= useParams()
const [item, setItem] = useState([]);


    useEffect(() => {

        fetch("https://api.mercadolibre.com/sites/MLA/search?q=placasdevideo&limit=9")    
    .then((respuesta) => respuesta.json())
    .then((data)=>{
        setTimeout(() =>{
            const buscado = data.results.find(e=>e.id ==id)
            console.log(buscado);
        setItem(buscado)            
        }, 2000);
    }) 

        },[])
return (
    <div> <ItemDetail item={item}/> </div>
)
}

export default ItemDetailContainer