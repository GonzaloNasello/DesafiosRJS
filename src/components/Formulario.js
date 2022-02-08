import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { useContexto } from "./Context";

const Formulario = () => {
    const { carrito, limpiarCarrito, preciototal } = useContexto()
    const [ idOrden , setIdOrden ] = useState()
    const [ nombre, setNombre ] = useState()
    const [ apellido, setApellido ] = useState()
    const [ email, setEmail ] = useState()

    const finalizarCompra = () => {
        
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : nombre,
                lastName : apellido,
                email : email
            },
            items : carrito ,
            date : serverTimestamp(),
            total : preciototal
        })
        .then((resultado)=>{
            setIdOrden(resultado.id)
            limpiarCarrito()
        })
    }
    return(
    <>
    <form className="formulario">
                    <input type="text" name="name" placeholder="Nombre" onChange={(ev) => setNombre (ev.target.value)} />
                    <input type="text" name="lastname" placeholder="Apellido" onChange={(ev) => setApellido (ev.target.value)} />
                    <input type="email" name="email" placeholder="Email" onChange={(ev) => setEmail (ev.target.value)}/>                
    </form>
    <p>Precio total: ${preciototal}</p>
    <button onClick={finalizarCompra}>Finalizar compra</button>
    <p>La compra se realizo con exito!! El codigo de orden es {idOrden}</p>
    </>
    )
}

export default Formulario