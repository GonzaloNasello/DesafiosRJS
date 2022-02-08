import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "./firebase"
import { getDocs, query, collection, where} from "firebase/firestore";


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
        <div className="itemListContainer">
        <ItemList catalogo={catalogo}/>
        </div>
            
    )
}

export default ItemListContainer;