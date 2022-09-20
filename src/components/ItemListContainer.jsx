import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import Destacado from './Destacado';



const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = [
            {"id": 1, "nombre":"RTX3080ti", "imagen":"https://http2.mlstatic.com/D_NQ_NP_952946-MLA48036524485_102021-W.jpg", "precio":"250000"},
            {"id": 2, "nombre":"RTX3090", "imagen":"https://http2.mlstatic.com/D_NQ_NP_996917-MLA51231565062_082022-W.jpg", "precio":"450000"},
            {"id": 3, "nombre":"RX6900", "imagen":"https://http2.mlstatic.com/D_NQ_NP_627045-MLA45143526259_032021-O.jpg", "precio":"270000"},
            {"id": 4, "nombre":"RTX3090ti", "imagen":"https://www.invidcomputers.com/images/000000000041452780577414527--1-.png", "precio":"500000"},
            {"id": 5, "nombre":"GTX1660SUPER", "imagen":"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-super-6gb-gigabyte-oc-0.jpg", "precio":"160000"},
            {"id": 6, "nombre":"RX5700XT", "imagen":"https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/16-12-2020-08-12-33-placa-de-video-rx-5700-xt-8gb-aorus-gigabyte.jpg", "precio":"200000"}
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
            <div> 
                <Destacado />
            </div>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer;