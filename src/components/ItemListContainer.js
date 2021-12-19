import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [
    {nombre: "Crisis en tierras infinitas", precio: 2000, id:1},
    {nombre: "The Flash", precio: 1100, id:2},
    {nombre: "Avengers: El guantelete del infinito", precio: 1800, id:3},
    {nombre: "Civil war", precio:1500, id:4}
]

const ItemListContainer = ({greeting}) => {
    
    let [catalogo, setCatalogo] = useState([])

    useEffect (()=>{
        const promesa = new Promise ((res, rej) =>{
            setTimeout(()=>{
                res(productos)
                console.log(productos)
            },2000)
        })

        promesa
        .then(()=>{
            console.log("Bien")
            setCatalogo(productos)
        })
        .catch(()=>{
            console.log("Mal")
        })
    },[])
    
    const onAdd = () => {
        console.log("Su compra se realizo con exito")
    }

    return (
            <>
            <div className="itemListContainer">
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemList catalogo={catalogo}/>
            </div>
            </>
    )
}

export default ItemListContainer;