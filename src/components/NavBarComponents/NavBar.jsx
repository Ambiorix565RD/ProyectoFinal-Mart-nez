import { useContext} from "react";
import  "../../scss/components/_NavBar.scss";
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContextComponent } from "../CartContextComponent/CartContextComponent";

export default function NavBar(){
    
    const {menuHamburguer, menuClose, menu} = useContext(CartContextComponent)
    
    
    return(
        <>
            <header className="navbarjsx">
                <Link to={"/"}> 
                    <img className="logoBateria" src="/logoBateria.jpeg" alt="LogoBateria" /> 
                </Link>
                <button className="menuHamburguer" onClick={menuHamburguer}>
                    <img src="/imagen-menu1.svg" alt="Menu Hamburguesa" />
                </button>
                    <nav className={`navbarCentro ${menu ? "open" : ""}`}>
                        <BotonNavbar  nombre="Inicio" link="/" menuClose = {menuClose} />
                        <BotonNavbar nombre="Baterías Acústicas" link="/category/Baterías-acústicas" menuClose = {menuClose} />
                        <BotonNavbar nombre="Baterías Eléctricas" link="/category/Baterías-eléctricas" menuClose = {menuClose} />
                        <BotonNavbar nombre="Platillos" link="/category/Platillos" menuClose = {menuClose} />
                        <BotonNavbar nombre="Accesorios" link="/category/Accesorios" menuClose = {menuClose}/>
                    </nav>
                        <CartWidget/>
            </header>
        </>
    );
}