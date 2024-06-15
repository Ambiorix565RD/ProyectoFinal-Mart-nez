import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContextComponent} from '../CartContextComponent/CartContextComponent';
import "./CartComponent.css"



function CartComponent() {
    const { cart,  eliminarCarrito, vaciarCarrito, calcularTotal } = useContext(CartContextComponent);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul className='cartComponent'>
                {cart.map((item) => (
                    <li  key={item.id}>
                        <div className="cartComponentList">
                            <img src={item.img} alt={item.nombre} /> 
                            <h6>{item.nombre}</h6>
                            <p>Precio: RD${item.precio.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>  
                            <p>cantidad: {item.quantity}</p>
                            <button className="cartComponentButton" onClick={() => eliminarCarrito(item.id)}><img src="iconDelete5.png" alt={item.nombre} /> </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='cartComponentTotal'>
                <p>Total: RD${calcularTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <div className='cartComponentButtons'>
                    <Link to="/CheckoutComponent">
                        <button className='cartComponentCheckout'>Continuar con la compra</button>
                    </Link>
                    <button className="cartComponentVaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;