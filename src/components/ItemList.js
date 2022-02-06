import Item from "./Item";

const ItemList = ({catalogo}) => {
    
    return (
        <div className="articulo--container"> 
            {catalogo.map((catalogo, indice) =>{
                return <Item key={indice} catalogo={catalogo}/>
            }
            )}
        </div>
    )
}

export default ItemList;