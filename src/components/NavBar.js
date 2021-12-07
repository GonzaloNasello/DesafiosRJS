const NavBar = () => {
    return (
        <header>
            <h1 className="tituloPrincipal">Mega Tienda Comics</h1>
            <nav className="nav">
            <a href="#" className="link" id="link--inicio">Inicio</a>
            <a href="#" className="link">Editoriales</a>
            <a href="#" className="link">Ofertas</a>
            <a href="#" className="link">Costo de Envio</a>
            <a href="#" className="link">Contacto</a>
            <img src="../../public/the-flash-logo.png"></img>
            </nav>
        </header>
    )
}

export default NavBar;