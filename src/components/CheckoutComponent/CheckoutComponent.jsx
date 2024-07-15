import { useState, useContext, useEffect } from "react"
import "../../scss/components/_CheckoutComponent.scss";
import "../../scss/utilities/_variables.scss"
import { addOrder } from "../../firebase";
import { CartContextComponent} from '../CartContextComponent/CartContextComponent';
import Swal from 'sweetalert2';
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function CheckoutComponent(){
    const [formInputs, setFormInputs] = useState({ name:"", lastName:"", email:"", phone:"", confirmEmail:"" })
    const {cart, vaciarCarrito, calcularTotal} = useContext(CartContextComponent)
    const totalPrice = calcularTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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

    //Manejo de los inputs
    const handleinputs = (e) => {
        const {name, value} = e.target;

        // manejo del campo telefono o celular para aplicar guiones automaticamente a medida el cliente va llenando el campo telefono o celular y no pueda colocar letras.
        if(name === "phone"){
            
            const numericValue = value.replace(/\D/g, "");

            let formattedValue = numericValue;
            if(numericValue.length > 3){
                formattedValue = `${numericValue.slice(0,3)}-${numericValue.slice(3)}`;
            }

            if(numericValue.length > 6){
                formattedValue = `${numericValue.slice(0,3)}-${numericValue.slice(3,6)}-${numericValue.slice(6, 10)}`;
            }

            setFormInputs({
                ...formInputs, [name]: formattedValue
            });

            //Limitar la cantidad de numeros que puede introducir para que sea de acuerdo al formato del pais.
            if(numericValue.length > 10){
                formattedValue = formattedValue.slice(0,12);
            }

        } else if (name === "name" || name === "lastName"){

            //validar que no ingresen numero en el campo de name y lastName

            const onlyLetters = /^[a-zA-Z\s]*$/;
            if(onlyLetters.test(value)) {
                setFormInputs({
                    ...formInputs, [name]: value
                });
            }
        } else {

            setFormInputs({
                ...formInputs, [name]: value
            });
        }
    };

    const validateName = (name) => {
        const words = /^[a-zA-Z\s]*$/;
        return words.test(name);
    }

    const validatePhone = (phone) => {
        const number = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return number.test(phone);
    }

    const handleConfirmEmailBlur = () => {
        if (formInputs.email !== formInputs.confirmEmail){
            Swal.fire({
                title: "¡Los correos no coinciden!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return;
        } 
    }

    //prevenir que copie y pegue el email en confirmEmail
    const handleConfirmEmailPage = (e) => {
        e.preventDefault();
        return false;
    }

    //Manejo del envio del formulario a firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        //validaciones de los campos
        if(!formInputs.name || !formInputs.lastName || !formInputs.phone || !formInputs.email){
            
            Swal.fire({
                title: "¡Favor de llenar todos los campos!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return;
        }

        //Validar que se coloque numeros en el campo nombre 
        if(!validateName(formInputs.name)){
               
            Swal.fire({
                title: "¡El nombre no debe contener números!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return;
            
        }

        //Validar que se coloque numeros en el campo apellido
        if(!validateName(formInputs.lastName)){
                
            Swal.fire({
                title: "¡El apellido no debe contener números!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return;
            
        }


        if(!validatePhone (formInputs.phone)){
            Swal.fire({
                title: "¡Favor colocar un número de teléfono válido!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return;
        }

        //Validar que se concuerden los campos email y la confirmacion del email
        
            if (formInputs.email !== formInputs.confirmEmail){
                Swal.fire({
                    title: "¡Los correos no coinciden!",
                    icon: 'error',
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: 'OK'
                })
                return;
            } 
        
        //Para guardar toda la info del formulario sin confirmEmail
        // eslint-disable-next-line no-unused-vars
        const { confirmEmail, ...orderData } = formInputs;

        // Para guardar toda la info de cart en una nueva lista pero sin la propiedad img
        // eslint-disable-next-line no-unused-vars
        const cartItems = cart.map(({img, ...item}) => item)

        //Envio de los datos del formulario y carrito para la Base de datos
       await addOrder(orderData, cartItems, totalPrice).then((id) => {

            Swal.fire({
                title: "¡Orden generada con éxito!",
                text: `Su entrega se realizará dentro de 3 a 5 días laborables, Orden ID: ${id}`,
                icon: 'success',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'Ver productos'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a la página de productos
                    window.location.href = "/";
                }
            });

            vaciarCarrito();

            //Para redirigir o limpiar el formulario
            setFormInputs({ name: "", lastName: "", email: "", phone: "", confirmEmail:"" });

        });
    }

    return(
        <>
        <main className="mainForm">
            <div className="formularioContenedor">
                <form onSubmit={handleSubmit}>
                    <div className="formulario">
                    <h2 >Formulario para generar la orden</h2>
                        <div className="form-group mb-1">
                            <label htmlFor="name" >Nombres:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                value={formInputs.name}
                                onChange={handleinputs}
                                placeholder="Ingrese su nombre"
                                required
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="lastName">Apellidos:</label>
                            
                            <input
                                className="form-control"
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formInputs.lastName}
                                onChange={handleinputs}
                                placeholder="Ingrese su apellido"
                                required
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="phone">Teléfono o celular:</label>
                            <input
                                className="form-control"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formInputs.phone}
                                onChange={handleinputs}
                                placeholder="849-123-4567"
                                required
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="email">Correo:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={formInputs.email}
                                onChange={handleinputs}
                                placeholder="correo@correo.com"
                                required
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="confirmEmail">Confirmar Correo:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formInputs.confirmEmail}
                                onChange={handleinputs}
                                onBlur={handleConfirmEmailBlur}
                                onPaste={handleConfirmEmailPage}
                                placeholder="Confirme su correo"
                                required
                            />
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Enviar nueva orden</button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )

}