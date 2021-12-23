const ItemDetail = ({producto}) => {
    
    return (
        <div> 
                
            <article className="articuloDetail">
            <div className="titulo--imgDetalle">
            <h3>{producto.nombre}</h3>
            <img className="imgDetalle" src={producto.img}></img>
            </div>
            <p>${producto.precio}</p>
            </article>
                
        </div>  
    )
}

export default ItemDetail;