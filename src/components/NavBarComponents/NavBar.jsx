import  "./NavBar.css";
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import logoBateria from "../../assets/logoBateria.jpeg";
import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <>
        <header className="navbarjsx">
        <Link to={"/"}> <img className="logoBateria" src={logoBateria} alt="logoBateria" /> </Link>
            <nav className="navbarCentro">
            <BotonNavbar  nombre="Home" link="/"/>
            <BotonNavbar nombre="Baterías Acústicas" link="/category/baterías-acústicas"/>
            <BotonNavbar nombre="Baterías Eléctricas" link="/category/baterías-eléctricas"/>
            <BotonNavbar nombre="Platillos" link="/category/platillos"/>
            <BotonNavbar nombre="Accesorios" link="/category/accesorios"/>
            </nav>
            <CartWidget/>
            </header>
        </>
    );
}