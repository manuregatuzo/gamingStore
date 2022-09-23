import React from 'react'

import {  useState, useEffect } from 'react';




const ItemCount = ({stock, initial, onAdd}) => {


const [counter, setCounter] = useState(initial)
const [itemStock, setItemStock ] = useState(stock)


const incrementar = () =>{
    if (counter < stock) {
        setCounter(counter + 1)
    }
    else {
        console.log("No hay stock!");
    }
}

const decrementar = () => {
    if (counter > 0) {
        setCounter(counter - 1)        
    }
}

const agregarProductos = () => {
    if (counter <= itemStock) {
        onAdd(counter); 
        setItemStock(itemStock - counter);
        setCounter(itemStock - counter); 
    
    }   
}

useEffect(() => { 
    setItemStock(stock);
}, [stock]);

return (
    <div className='countGral'>    
        <div className='text-center'>
            <button id="buttonDown" className="buttonCount" onClick={decrementar}>-</button>
        Cantidad: {counter}
        <button id="buttonUp" className="buttonCount" onClick={incrementar}>+</button>
        </div>
        <button className="btnGral" onClick={() => {agregarProductos()}}>
        Añadir al carrito
        </button>


    </div>
);
};


export default ItemCount