import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContextComponent} from '../CartContextComponent/CartContextComponent';
import "../../scss/components/_CartComponent.scss";
import "../../scss/utilities/_variables.scss"
import EmptyCartComponent from '../EmptyCartComponent/EmptyCartComponent';
import LoadingComponent from "../LoadingComponent/LoadingComponent";

function CartComponent() {
    const { cart,  eliminarCarrito, vaciarCarrito, calcularSubTotal, calcularImpuestos, calcularTotal } = useContext(CartContextComponent);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        
        //Limpiamos el clearTimeout en caso de que el componente se desmonte antes.
        return () => clearTimeout(timeout)
  
      }, []);
  
      if(loading){
        return <LoadingComponent/>
      }


    //Codigo para mostrar informacion cuando el carrito esta vacio
    if(cart.length === 0){
            
        return <EmptyCartComponent/>
    }


    return (
        <main className='mainCartComponent'>
            <h2>Carrito de Compras</h2>
            <section className='sectionCartComponent'>
                <div className='cartComponentDiv'>
                    <div className='cartComponentSubtitulos'>
                        <h5>Producto</h5>
                        <h5>Precio</h5>
                        <h5>Cantidad</h5>
                        <h5>Acciones</h5>
                    </div>
                    <ul className='cartComponent'>
                        {cart.map((item) => (
                            <li  key={item.id}>
                                <div className="cartComponentList">
                                    <div className='cartComponentItem'>
                                        <img src={item.img} alt={item.title} /> 
                                        <h6>{item.title}</h6>
                                    </div>
                                    <p>RD${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>  
                                    <p>{item.quantity}</p>
                                    <button className="cartComponentButton" onClick={() => eliminarCarrito(item.id)}><img src="iconDelete.png" alt={item.title} /> </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='cartComponentSummary'>
                    <div className='cartComponentLine'>
                        <div className='cartComponentSubtotal'>
                            <div>
                                <h5>Subtotal:</h5> 
                            </div>
                            <div>
                                <p>RD${calcularSubTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                        </div>
                        <div className='cartComponentImpuestos'>
                            <div>
                                <h5>Impuestos:</h5>
                            </div>
                            <div>
                                <p>RD${calcularImpuestos().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                        </div>
                    </div>
                    <div className='cartComponentTotal'>
                        <h5>Total:</h5>
                        <p>RD${calcularTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div className='cartComponentButtons'>
                        <Link to="/CheckoutComponent">
                            <button className='cartComponentCheckout'>Continuar compra</button>
                        </Link>
                        <button className="cartComponentVaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CartComponent;