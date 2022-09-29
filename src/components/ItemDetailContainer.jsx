import React from 'react'
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { getFirestore,getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
const {id}= useParams()
const [item, setItems] = useState([]);


    useEffect(() => {
        const db = getFirestore()
        const response = doc(db, "productos", id)
        getDoc(response).then((snapShot) => {
        setItems({id:snapShot.id,...snapShot.data()})
        }) 

    }, [id])

return (
    <div> <ItemDetail item={item}/> </div>
)
}

export default ItemDetailContainer