import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "./firebase"
import { getDocs, query, collection, where} from "firebase/firestore";


const productos = [
    {nombre: "Crisis en tierras infinitas", precio: 2000, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/crisis_cov_arg1-a4a9db904b75118e4315980054342033-1024-1024.jpg", id:1, categoria:"DC"},
    {nombre: "The Flash", precio: 1100, img:"https://images-na.ssl-images-amazon.com/images/I/91tVDADj+dL.jpg", id:2, categoria:"DC"},
    {nombre: "Avengers: El guantelete del infinito", precio: 1800, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/excelsioravengersguanteletedelinfivol011-fba60a45b1ea17e3af15909599812390-1024-1024.jpg", id:3, categoria:"Marvel"},
    {nombre: "Civil war", precio:1500, img:"https://dam.smashmexico.com.mx/wp-content/uploads/2019/09/marvel-grandes-eventos-civil-war-portada.jpg", id:4, categoria:"Marvel"}
]

const ItemListContainer = ({greeting}) => {
    
    const { categoria } = useParams()
    let [catalogo, setCatalogo] = useState([])


    useEffect (()=>{

        const catalogoCollection = collection(db, "catalogo")

        if (categoria){
            const consulta = query(catalogoCollection, where("categoria", "==", categoria))
            getDocs(consulta)
            .then(({docs}) => {
                setCatalogo(docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            })
            .catch((error) => {
                console.log(error)
            })
        }else {
            getDocs(catalogoCollection)
            .then(({docs}) => {
                setCatalogo(docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            })
            .catch((error) => {
                console.log(error)
            })
        }
        },[categoria])
    
    return (
            <>
            <div className="itemListContainer">
            <h2>¡{greeting}!</h2>
            <ItemList catalogo={catalogo}/>
            </div>
            </>
    )
}

export default ItemListContainer;