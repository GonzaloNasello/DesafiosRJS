import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const secciones = ["Editoriales", "Ofertas", "Costo de Envio", "Contacto"];
const greeting = "Superman";

const App = () => {
    return (
        <>
            <NavBar secciones={secciones}/>
            <ItemListContainer greeting={greeting}/>
        </>
    )
}

export default App;