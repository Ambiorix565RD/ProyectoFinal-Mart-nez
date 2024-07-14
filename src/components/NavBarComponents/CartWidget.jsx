//Logo del carrito con la notificacion del numero en el carrito.
//Agregarlo dentro del NavBar con estilos de bootstrap o manual en css.
import "../../scss/components/_CartWidget.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContextComponent } from '../CartContextComponent/CartContextComponent';


export default function CartWidget() {
    const {contarProductos} = useContext(CartContextComponent);

    return (
        <div className="cartWidget">
            <Link to="/CartComponent">
                <button>
                    <h5>{contarProductos()}</h5>
                    <img className="logoCarrito" src="/logoCarrito.png" alt="logoCarrito" />
                </button>
            </Link>
        </div>
    );
  }

