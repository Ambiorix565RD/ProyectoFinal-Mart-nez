import PropTypes from 'prop-types';
import { createContext, useState } from "react"

export const CartContextComponent = createContext(false);

 export default function CartContextComponentProvider ({children}) {
    const [cart, setCart] = useState([]);

    // Funcion agregar un producto al carrito
        const agregarAlCarrito = (product, quantity) => {

            setCart((prevCarrito) => {

                const ProductExistente = prevCarrito.find((item) => item.id === product.id);

                if(ProductExistente){

                    return prevCarrito.map((item) =>

                        item.id === product.id ? { ...item, quantity: item.quantity + quantity} : item
                    );

                } else {

                    return [...prevCarrito, { ...product, quantity }];
                }
            });
        };

        //Funcion eliminar producto del carrito
        const eliminarCarrito = (productId) =>{

            setCart((prevCarrito) =>
                prevCarrito.reduce((acc, item) => {
                  if (item.id === productId) {

                    if (item.quantity > 1) {

                        return [...acc, { ...item, quantity: item.quantity - 1}];
                    }

                    return acc;

                  } 

                  return [...acc, item]; 

                }, [])
            )
        }

        //Vaciar todos los productos del carrito
        const vaciarCarrito = () =>{
            setCart([]);
        };

          // Función para calcular el total del carrito
        const calcularTotal = () => {
            return cart.reduce((total, item) => total + item.price * item.quantity, 0);
        };

        // Función para contar la cantidad total de productos en el carrito
        const contarProductos = () => {
            return cart.reduce((total, item) => total + item.quantity, 0);
        };

    return (
        <CartContextComponent.Provider value ={{cart, agregarAlCarrito, eliminarCarrito, vaciarCarrito, calcularTotal, contarProductos  }}>
            {children}
        </CartContextComponent.Provider>
    );
    
}

CartContextComponentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
