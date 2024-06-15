import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardProducts({img, nombre, precio, idItem }){

    return(
        <>
            <div >
                <img src={img} alt={nombre}/>
                <h3>{nombre}</h3>
                <p>RD${precio.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <div className="logo-button-shopp">
                    <Link to={`/item/${idItem}`}> 
                    <button className="btn btn-primary button-instrument-tienda logo-button-shopp">Ver detalles</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

CardProducts.propTypes = {
    nombre: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    idItem: PropTypes.string.isRequired,
    procces: PropTypes.string.isRequired

  };