import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardProducts({img, title, price, idItem }){

    return(
        <>
            <div >
                <img src={img} alt={title}/>
                <h3>{title}</h3>
                <p>RD$ {price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <div className="buttonInstrumentTienda">
                    <Link to={`/item/${idItem}`}> 
                        <button className="btn btn-primary detailButtonShop">Ver detalles</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

CardProducts.propTypes = {
    title: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    idItem: PropTypes.string.isRequired,
  };