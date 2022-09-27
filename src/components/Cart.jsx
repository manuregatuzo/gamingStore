import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from "./Context"



const Cart = () => {

    const {cart, compraTotal, eliminarItem} = useContext(CartContext)     
    console.log(cart);
    return(
        
        <div>
            <div>
        {cart.length <= 0 ? (
        <div> <Link to={"/"} className="tdCart btnEliminar">Volver al inicio </Link> </div>
        ) : (
        <div className="text-center">
            <h3>Este es su carro de compras!</h3> 
            </div>
        )}        
    </div>

    {cart.map((item) => (        
        <div key={item.id} className="tableCart">
        <table> 
        <tbody>
        <tr>
            <td className="tdCart">ID: {item.id} </td>
            <td className="tdCart">Producto: {item.nombre}</td>
            <td className="tdCart">Cantidad: {item.cantidad}</td>
            <td className="tdCart"> Precio: ${item.precio * item.cantidad}</td>
        </tr>
        </tbody>
        </table>
        <button className="tdCart btnEliminar" onClick={() => {eliminarItem(item.id)}}>Eliminar item</button>
        </div>


    ))}
        <div>
        <td colSpan={3} className="text-end fw-bold">Total a Pagar</td>
        <td className="text-end fw-bold">${compraTotal()}</td>
        </div>
        </div>
    )
}










export default Cart