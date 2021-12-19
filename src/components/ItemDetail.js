const ItemDetail = ({producto}) => {
    
    return (
        <div>
            <article className="articulo">
                <div className="titulo--imgDetalle">
                <h3>{producto.nombre}</h3>
                <img className="imgDetalle" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/crisis_cov_arg1-a4a9db904b75118e4315980054342033-1024-1024.jpg"></img>
                </div>
                <p>${producto.precio}</p>
            </article>
        </div>
    )
}

export default ItemDetail;