import ItemDetailContainer from "./components/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () => {
    const secciones = ["Editoriales", "Ofertas", "Costo de Envio", "Contacto"];
    const greeting = "Superman";

    return (
        <>
            <NavBar secciones={secciones}/>
            <section className="section">
            <ItemListContainer greeting={greeting}/>
            <ItemDetailContainer/>
            </section>
        </>
    )
}

export default App;