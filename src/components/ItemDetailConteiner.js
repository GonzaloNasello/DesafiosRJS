import { useState, useEffect} from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase";
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  
    const { id } = useParams()
    let [producto, setProducto] = useState([])
    useEffect (()=>{
        const catalogoCollection = collection(db, "catalogo")
        const refDoc = doc(catalogoCollection, id)
        getDoc(refDoc)
        .then((resultado) => {
            setProducto(resultado.data())
        })
        .catch((error) =>{
            console.log(error)
        })
    },[id])
    
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer;