import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <h2>Relatos de Papel</h2>

            <div className="links">
                <Link to="/home">Inicio</Link>
                <Link to="/profile">Perfil</Link>
                <Link to="/checkout">Carrito</Link>
            </div>
        </nav>
    );
};

export default Navbar;