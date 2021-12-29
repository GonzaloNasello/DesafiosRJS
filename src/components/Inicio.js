import { Link } from "react-router-dom";

const Inicio = () => {
    return (
            <div className="linksInicio">
                <Link to={`/Editoriales/DC`}>DC</Link>
                <Link to={`/Editoriales/Marvel`}>Marvel</Link>
            </div>
    )
}

export default Inicio;