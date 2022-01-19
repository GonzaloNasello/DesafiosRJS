import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "./firebase";
import { collection, doc, getDoc } from "firebase/firestore";


const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}



const CustomProvider = ({children}) => {
    
    const [preciototal, setPrecioTotal] = useState(0)
    const [cantidadtotal,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])
    
    const agregarAlCarrito = (contador, producto) => {
        const key = producto.key
        if(isInCarrito(key)){
            const copia_carrito = [...carrito]
            let busqueda = copia_carrito.find((prod) => prod.key === producto.key)
            busqueda.contador = busqueda.contador + contador
            setCarrito(copia_carrito)
        }else {
            const producto_con_contador = {
                ...producto,
                contador
            } 
            setCarrito([...carrito, producto_con_contador])
        }
    setCantidadTotal(cantidadtotal + contador)  
    const precio_con_cantidad = producto.precio * contador
    setPrecioTotal(preciototal + precio_con_cantidad)   
    }
    
    
    const borrarDelCarrito = (contador, key) => {
        let filtrarCarrito = carrito.filter(e => (e.key) !== key)
        let buscarEnCarrito = carrito.find(e => (e.key) === key)
        console.log(filtrarCarrito)
        console.log(buscarEnCarrito)

        setCarrito(filtrarCarrito)
        setCantidadTotal(cantidadtotal - contador)
        /*setPrecioTotal(preciototal - (buscarEnCarrito.precio * contador))*/
    }

    const limpiarCarrito = () => {  
        setCarrito([])  
        setCantidadTotal(0)
        setPrecioTotal(0)
    }
    
    const isInCarrito = (key) => {
        return carrito.some((prod) => prod.key === key)
    }
    
    const valorDelContexto = {
        cantidadtotal , 
        carrito , 
        preciototal ,
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