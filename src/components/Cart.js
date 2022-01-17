import { Link } from "react-router-dom";
import { useContexto } from "./Context";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const Cart = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito, preciototal } = useContexto()
    
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
            total : 100
        })
        .then((resultado)=>{
            console.log(resultado)
            limpiarCarrito()
        })
    }

    return (
        <div> 
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, id) => {
                        return <li key={id}>{producto.nombre} - ${producto.precio} X {producto.contador} <button onClick={()=>borrarDelCarrito(producto.id,producto.contador)}>Borrar producto</button></li>
                    })}
                </ul>
            ) : <>
                <p>No selecciono productos</p>
                <Link to={"/"}>Ver productos</Link>
                </>
                }
            <p>Precio total: ${preciototal}</p>
            <button onClick={finalizarCompra}>Finalizar compra</button>
        </div>
    )
}

export default Cart;