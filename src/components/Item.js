const Item = ({catalogo}) => {
    
    return (
            <article className="articulo">
                <h3>{catalogo.nombre}</h3>
                <p>${catalogo.precio}</p>
                <button>Ver mas</button>
            </article>
    )
}

export default Item;