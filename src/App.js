import NavBar from "./components/NavBar";

const secciones = ["Editoriales", "Ofertas", "Costo de Envio", "Contacto"]

const App = () => {
    return (
        <>
            <NavBar secciones={secciones}/>
        </>
    )
}

export default App;