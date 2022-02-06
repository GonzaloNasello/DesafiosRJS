import { Link, useParams } from "react-router-dom";
import { useContexto } from "./Context";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const Cart = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito, preciototal } = useContexto()
    const [ idOrden , setIdOrden ] = useState()
    
    const finalizarCompra = () => {
        
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "Gonzalo",
                lastName : "Nasello",
                email : "mail@mail"
            },
            items : carrito ,
            date : serverTimestamp(),
            total : preciototal
        })
        .then((resultado)=>{
            setIdOrden(resultado.id)
            limpiarCarrito()
        })
    }

    return (
        <div> 
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, id) => {
                        return <li key={id}>{producto.nombre} - ${producto.precio} X {producto.contador} <button onClick={()=>borrarDelCarrito(producto.key, producto.contador)}>Borrar producto</button></li>
                    })}
                </ul>
            ) : <>
                <p>No selecciono productos</p>
                <Link to={"/"}>Ver productos</Link>
                </>
                }
            <p>Precio total: ${preciototal}</p>
            <button onClick={finalizarCompra}>Finalizar compra</button>
            <p>La compra se realizo con exito!! El codigo de orden es {idOrden}</p>
        </div>
    )
}

export default Cart;