import { useState, useEffect} from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";

const detalleProducto = {
    nombre: "Crisis en tierras infinitas",
    precio: 2000,
    id:1
}

const ItemDetailContainer = () => {
  
    let [producto, setProducto] = useState({})

    useEffect (()=>{
        const promesa = new Promise ((res, rej) =>{
            setTimeout(()=>{
                res(detalleProducto)
                console.log(detalleProducto)
            },2000)
        })

        promesa
        .then(()=>{
            console.log("Bien")
            setProducto(detalleProducto)
        })
        .catch(()=>{
            console.log("Mal")
        })
    },[])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer;