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
    
    const eliminarItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const cartTotal = () => { 
        return cart.reduce((total, item) => total+=item.cantidad, 0);
        }


    const compraTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad*item.precio, 0);
        }  

    return(
        <CartContext.Provider value={{cart, addItem, clear, cartTotal, compraTotal, eliminarItem}}>
            {children}
        </CartContext.Provider>
    )
}





export default Context;