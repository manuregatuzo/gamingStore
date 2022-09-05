import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial}) => {
const [contador, setContador] = useState(initial)


const incrementar = () =>{
    if (contador < stock) {
        setContador(contador + 1)
    }
    else {
        console.log("No hay stock!");
    }
}

const decrementar = () => {
    if (contador > 0) {
        setContador(contador - 1)        
    }
}


return (
    <div>    
        <div>
            <button id="buttonDown" className="buttonCount" onClick={decrementar}>-</button>
        Cantidad: {contador}
        <button id="buttonUp" className="buttonCount" onClick={incrementar}>+</button>
    </div>
    </div>
);
};


export default ItemCount