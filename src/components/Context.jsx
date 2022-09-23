import React from "react";
import { useState , createContext } from "react";


export const CartContext = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState ([])
    
    const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);  
        }
    }

    const clear = () => {
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const cartTotal = () => { 
        return cart.length
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}





export default Context;