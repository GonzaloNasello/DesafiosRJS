import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    const onAdd = () => {
        console.log("Su compra se realizo con exito")
    }

    return (
            <>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </>
    )
}

export default ItemListContainer;