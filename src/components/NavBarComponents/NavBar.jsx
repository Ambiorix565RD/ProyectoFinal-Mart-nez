import { useState } from "react";
import  "../../scss/components/_NavBar.scss";
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar(){
    const [menu, setMenu] = useState(false)

    const menuHamburguer = () => {
        setMenu(!menu);
    };

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
                        <BotonNavbar  nombre="Home" link="/"/>
                        <BotonNavbar nombre="Baterías Acústicas" link="/category/Baterías-acústicas"/>
                        <BotonNavbar nombre="Baterías Eléctricas" link="/category/Baterías-eléctricas"/>
                        <BotonNavbar nombre="Platillos" link="/category/Platillos"/>
                        <BotonNavbar nombre="Accesorios" link="/category/Accesorios"/>
                    </nav>
                        <CartWidget/>
            </header>
        </>
    );
}