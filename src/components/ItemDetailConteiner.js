import { useState, useEffect} from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const detalleProducto =  
[
    {nombre: "Crisis en tierras infinitas", precio: 2000, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/crisis_cov_arg1-a4a9db904b75118e4315980054342033-1024-1024.jpg", id:1},
    {nombre: "The Flash", precio: 1100, img:"https://images-na.ssl-images-amazon.com/images/I/91tVDADj+dL.jpg", id:2},
    {nombre: "Avengers: El guantelete del infinito", precio: 1800, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/excelsioravengersguanteletedelinfivol011-fba60a45b1ea17e3af15909599812390-1024-1024.jpg", id:3},
    {nombre: "Civil war", precio:1500, img:"https://dam.smashmexico.com.mx/wp-content/uploads/2019/09/marvel-grandes-eventos-civil-war-portada.jpg", id:4}
]
    

const ItemDetailContainer = () => {
  
    const { id } = useParams()
    let [producto, setProducto] = useState([])

    useEffect (()=>{
        
        const catalogoCollection = collection(db, "catalogo")
        const refDoc = doc(catalogoCollection, id)
        getDoc(refDoc)
        .then((resultado) => {
            setProducto(resultado.data())
            console.log(id)
            console.log(resultado.data())
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