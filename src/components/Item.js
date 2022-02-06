import { Link } from "react-router-dom";

const Item = ({catalogo}) => {
    
    return (
            <article className="articulo">
                <img className="imagenProducto" src={catalogo.img}></img>
                <h3>{catalogo.nombre}</h3>
                <p>${catalogo.precio}</p>
                <Link to={`/Ofertas/${catalogo.id}`}><button className="botonvermas">Ver mas</button></Link>
            </article>
    )
}

export default Item;