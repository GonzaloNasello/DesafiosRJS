import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    let [contador, setContador] = useState(initial);
    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador != initial){
        setContador(contador - 1);
        }
    }    

    const reset = () => {
        setContador(initial);
    }

    const agregarAlCarrito = () =>{
        onAdd(contador);
    }

    return (
        <>
        <p>Carrito:{contador}</p>
        <div>
        <button className="botonsumaresta" onClick={sumar}>+</button>
        <button onClick={reset}>Reset</button>
        <button className="botonsumaresta" onClick={restar}>-</button>
        </div>
        <button className="botonconfirmar" onClick={agregarAlCarrito}>Confirmar</button>
        </>
    )
}

export default ItemCount;
