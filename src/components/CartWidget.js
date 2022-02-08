import { NavLink } from "react-router-dom";
import { useContexto } from "./Context";

const CartWidget = () => {
    
    const { cantidadtotal } = useContexto()
   
    return (
            <>
            <NavLink to={"/Cart"} ><span class="material-icons" id="icono"> book </span></NavLink>
            {cantidadtotal}
            </>
    )
}

export default CartWidget;