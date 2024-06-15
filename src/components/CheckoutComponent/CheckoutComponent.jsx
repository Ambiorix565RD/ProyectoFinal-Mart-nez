import { useState } from "react"


export default function CheckoutComponent(){
    const [formInputs, setFormInputs] = useState({ nombre:"", apellido:"", correo:"", })

    //Manejo de los inputs
    const handleinputs = (e) => {
        const {nombre, value} = e.target;
        setFormInputs({
            ...formInputs, [nombre]: value
        });
    };

    //Manejo del envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formInputs.nombre || !formInputs.apellido || !formInputs.correo){
            alert("¡Favor de llenar todos los campos!")
            return;
        }
        console.log("Datos del formulario: ", formInputs)

        //colocar los datos de envio para la Base de datos
    }

    return(
        <>
        
        <form className="form-signin w-100 m-auto" onSubmit={handleSubmit}>
            <div className="form-floating mb-1">
                
                <label htmlFor="nombre" >Nombres:</label>
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
                <label htmlFor="Confirmcorreo">Confirmar Correo:</label>
                <input
                    className="form-control"
                    type="email"
                    id="Confirmcorreo"
                    name="Confirmcorreo"
                />
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Enviar nueva orden</button>
        </form>
        </>
    )

}