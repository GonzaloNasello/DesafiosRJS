import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = ({secciones}) => {
    return (
        <header>
            <h1 className="tituloPrincipal">Mega Tienda Comics</h1>
            <nav className="nav">
            <NavLink to={"Inicio"} className="link" id="link--inicio">Inicio</NavLink>
            {secciones.map((secciones, indice) =>{
                return <NavLink key={secciones.id} to={secciones.href} className="link">{secciones.nombre}</NavLink>
            }
            )}
            <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;