import React, { useState, useContext } from "react";
import { CartContext } from "../Context/Context";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import moment from "moment/moment";



const FormCompra = () => {
    const {cart, clear, cartTotal, compraTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const enviarOrden = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {            
            const comprador = {name:nombre, email:email, phone:telefono};            
            const items = [];
            cart.forEach(item => { 
                items.push({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad});
            });            
            const fecha = moment().format('MMMM Do YYYY, h:mm:ss a');            
            const compra = {buyer:comprador, items:items, date:fecha, total:compraTotal()};           
            
            const db = getFirestore();
            const comprasDb =  collection(db, "compras");
            addDoc(comprasDb, compra).then(({id}) => {
                setOrderId(id);
                clear();
            });
        }
    }

    return (
        <div className="container py-5 cartCompra">
            {cartTotal() > 0 ?
            <div className="row">
                <div className="col-md-4 offset-md-2">
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <button type="button" class="btn btn-success" onClick={() => {enviarOrden()}}>Generar compra</button>
                </div>
                <div className="col-md-4">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={item.imagen} alt={item.nombre} title={item.nombre} width="120" /></td>
                                    <td className="text-start align-middle">{item.nombre} x {item.cantidad}</td>
                                    <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                <td className="text-end fw-bold">${compraTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : orderId !== "" ? <div className="idcss"> <h2 className="idcompra">Orden de compra generada con el id: {orderId}</h2></div> : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default FormCompra;