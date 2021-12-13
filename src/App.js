import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () => {
    const secciones = ["Editoriales", "Ofertas", "Costo de Envio", "Contacto"];
    const greeting = "Superman";

    return (
        <>
            <NavBar secciones={secciones}/>
            <ItemListContainer greeting={greeting}/>
        </>
    )
}

export default App;