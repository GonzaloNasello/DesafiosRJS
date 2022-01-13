import { Link } from "react-router-dom";
import { useContexto } from "./Context";

const Cart = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito, preciototal } = useContexto()
    
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
            <button onClick={limpiarCarrito}>Eliminar todo</button>
        </div>
    )
}

export default Cart;