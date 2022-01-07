import { createContext, useContext, useState } from "react";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}



const CustomProvider = ({children}) => {

    const [cantidadtotal,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const agregarAlCarrito = (producto,cantidad) => {
        if(isInCarrito()){

        }else{

        }
    }

    const borrarDelCarrito = (id) => {}

    const limpiarCarrito = () => {  setCarrito([])  }

    const isInCarrito = (id) => {
        //return true ? false
    }

    const valorDelContexto = {
        cantidadtotal , 
        carrito , 
        agregarAlCarrito , 
        borrarDelCarrito ,
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider