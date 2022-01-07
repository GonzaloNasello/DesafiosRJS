import ItemCount from "./ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({producto}) => {
    
    const [estado, setEstado] = useState(true);
    const [cantidad, setCantidad] = useState(0);
    
    const onAdd = (contador) => {
        console.log("Su compra se realizo con exito")
        setCantidad(contador)
        setEstado(false)
    }
    console.log(cantidad)

    if (estado===true) {
        return (
            <div>     
                <article className="articuloDetail">
                <div className="titulo--imgDetalle">
                <h3>{producto.nombre}</h3>
                <img className="imgDetalle" src={producto.img}></img>
                </div>
                <p>${producto.precio}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </article>
            </div>  
        )
    }else {
        return (
            <div>     
                <article className="articuloDetail">
                <div className="titulo--imgDetalle">
                <h3>{producto.nombre}</h3>
                <img className="imgDetalle" src={producto.img}></img>
                </div>
                <p>${producto.precio}</p>
                <NavLink to="/cart"><button className="botonfinalizar">Finalizar compra</button></NavLink>
                </article>
            </div>  
        )
    }
}

export default ItemDetail;