import { Link } from "react-router-dom";
import { useContexto } from "./Context";
import Formulario from "./Formulario";

const Cart = () => {

    const { carrito, borrarDelCarrito } = useContexto()
    
    return (
        <div className="div--carrito"> 
            <h2>Carrito</h2>
            {carrito.length > 0 ? ( 
                <ul>
                    {carrito.map((producto, id) => {
                        return <li key={id}>
                                <div className="producto--carrito">
                                    <img className="imagen--carrito" src={producto.img}></img>
                                    {producto.nombre} - ${producto.precio} X {producto.contador}  
                                </div>
                                <button onClick={()=>borrarDelCarrito(producto.key, producto.contador)}>Borrar producto</button></li>
                    })}
                </ul>
            ) : <>
                <p>No selecciono productos</p>
                <Link to={"/"}>Ver productos</Link>
                </>
            }
            {carrito.length > 0 ? <Formulario/> : null}   
        </div>
    )
}

export default Cart;