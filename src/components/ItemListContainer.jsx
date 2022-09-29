import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import Destacado from './Destacado';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../index"


const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    useEffect(() => {

        const gettingData = async () => {
            const docs = [];
            const prods = await getDocs(collection(db, "productos"));
            prods.forEach((document) => {
            docs.push({ ...document.data(), id: document.id });
            });
            setItems(docs);
        };

        gettingData();
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