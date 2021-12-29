import ItemDetailContainer from "./components/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import CostoDeEnvio from "./components/CostoDeEnvio";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const secciones = [
        { href: "/Editoriales", nombre: "Editoriales", id: 1 },
        { href: "/Editoriales/Marvel", nombre: "Marvel", id: 2 },
        { href: "/Editoriales/DC", nombre: "DC", id: 3 },
        { href: "/Ofertas", nombre: "Ofertas", id: 4 },
        { href: "/Costo de Envio", nombre: "Costo de Envio", id: 5 }
    ]
    const greeting = "SuperBienvenido";

    return (
        <BrowserRouter>
            <NavBar secciones={secciones}/>
                <Routes>
                    <Route path="/Inicio" element={<Inicio/>} />
                    <Route path="/Editoriales/:categoria" element={<ItemListContainer greeting={greeting}/>} />
                    <Route path="/Ofertas/:id" element={<ItemDetailContainer/>} />
                    <Route path="/Costo%20de%20Envio" element={<CostoDeEnvio/>} />
                    <Route path="/Contacto" element={<Contacto/>} />
                </Routes>    
            <Footer/>
        </BrowserRouter>
    )
}

export default App;