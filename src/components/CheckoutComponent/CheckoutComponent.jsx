import { useState } from "react"
import "./CheckoutComponent.css";

export default function CheckoutComponent(){
    const [formInputs, setFormInputs] = useState({ nombre:"", apellido:"", correo:"", })

    //Manejo de los inputs
    const handleinputs = (e) => {
        const {name, value} = e.target;
        setFormInputs({
            ...formInputs, [name]: value
        });
    };

    //Manejo del envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        //validaciones de los campos
        if(!formInputs.nombre || !formInputs.apellido || !formInputs.correo){
            alert("¡Favor de llenar todos los campos!")
            return;
        }
        if (formInputs.correo !== formInputs.confirmCorreo){
            alert("¡Los correos no coinciden!")
            return;
        } 
        console.log("Datos del formulario: ", formInputs)

        //colocar los datos de envio para la Base de datos
    }

    return(
        <>
        <main className="mainForm">
            <div className="formularioContenedor">
                <form onSubmit={handleSubmit}>
                    <div className="formulario">
                    <h2 >Formulario para la orden</h2>
                        <div className="form-floating mb-1">
                            <label htmlFor="nombre" >Nombres:</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formInputs.nombre}
                                onChange={handleinputs}
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="apellido">Apellidos:</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={formInputs.apellido}
                                onChange={handleinputs}
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="correo">Correo:</label>
                            <br />
                            <input
                                className="form-control"
                                type="email"
                                id="correo"
                                name="correo"
                                value={formInputs.correo}
                                onChange={handleinputs}
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="confirmCorreo">Confirmar Correo:</label>
                            <br />
                            <input
                                className="form-control"
                                type="email"
                                id="confirmCorreo"
                                name="confirmCorreo"
                                value={formInputs.confirmCorreo}
                                onChange={handleinputs}
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