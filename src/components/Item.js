import { Link } from "react-router-dom";

const Item = ({catalogo}) => {
    
    return (
            <article className="articulo">
                <div className="articulo--div">
                    <h3>{catalogo.nombre}</h3>
                    <p>${catalogo.precio}</p>
                    <Link to={`/Ofertas/${catalogo.id}`}><button className="botonvermas">Ver mas</button></Link>
                </div>
                <img className="imagenProducto" src={catalogo.img}></img>
            </article>
    )
}

export default Item;