import ItemDetailContainer from "./components/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CustomProvider, { Provider} from "./components/Context"

const App = () => {
    const secciones = [
        { href: "/Editoriales/Marvel", nombre: "Marvel", id: 1 },
        { href: "/Editoriales/DC", nombre: "DC", id: 2 },
        { href: "/Cart", nombre: "Carrito", id: 3 },
        { href: "/Contacto", nombre: "Contacto", id: 4 }

    ]
    const greeting = "SuperBienvenido";

    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar secciones={secciones}/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={greeting}/>} />
                        <Route path="/Editoriales/:categoria" element={<ItemListContainer greeting={greeting}/>} />
                        <Route path="/Ofertas/:id" element={<ItemDetailContainer/>} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/Contacto" element={<Contacto/>} />
                    </Routes>    
                <Footer/>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App;