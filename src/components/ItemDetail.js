import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = () => {
        console.log("Su compra se realizo con exito")
    }


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
}

export default ItemDetail;