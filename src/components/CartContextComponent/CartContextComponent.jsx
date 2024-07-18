import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react"
import { toast } from 'react-toastify';

export const CartContextComponent = createContext(false);

 export default function CartContextComponentProvider ({children}) {
    const [cart, setCart] = useState([]);

    //Manejar del evento del menu hamburguesa del componente NavBar
    const [menu, setMenu] = useState(false)

    //Uso del localStorage en el carrito

    //Cargamos el carrito desde el localStorage cuando el componente se monte.
    useEffect(() => {
        const cartSaved = JSON.parse (localStorage.getItem('cart'));
        if(cartSaved){
            setCart(cartSaved);
        }
    }, [])

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
            
            //mensaje de toastify al usuario
            toast.success('¡Producto agregado exitosamente!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
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

            //mensaje de toastify al usuario
            toast.success('¡Producto eliminado exitosamente!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }

        //Vaciar todos los productos del carrito
        const vaciarCarrito = () =>{
            setCart([]);
        };

          // Función para calcular el subtotal del carrito
        const calcularSubTotal = () => {
            return cart.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
        };

        const calcularImpuestos = () => {
            const subTotal= calcularSubTotal();
            const impuestos = subTotal * 0.18;
            return impuestos
        }

        const calcularTotal = () => {
            const subTotal = calcularSubTotal();
            const impuestos = calcularImpuestos();
            const total = subTotal + impuestos;
            return total
        }

        // Función para contar la cantidad total de productos en el carrito
        const contarProductos = () => {
            return cart.reduce((total, item) => total + item.quantity, 0);
        };

        //Para el menu Hamrbuguersa del componente NavBar.
        const menuHamburguer = () => {
            setMenu(!menu);
        };

        //funcion para cerrar el menu hamburguesa cuando el usuario haga click
        const menuClose = () => {
            setMenu(false);
        }

        
    return (
        <CartContextComponent.Provider value ={{cart, agregarAlCarrito, eliminarCarrito, vaciarCarrito, calcularSubTotal, contarProductos, calcularImpuestos, calcularTotal, menuHamburguer, menuClose, menu }}>
            {children}
        </CartContextComponent.Provider>
    );
    
}

CartContextComponentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
