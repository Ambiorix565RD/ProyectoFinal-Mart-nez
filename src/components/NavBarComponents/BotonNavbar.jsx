import PropTypes from 'prop-types';
import "../../scss/components/_BotonNavbar.scss";
import "../../scss/utilities/_variables.scss"
import { Link} from 'react-router-dom';

export default function BotonNavbar({ nombre, link }) {

    return (
        <Link to={link}>
            <button className='botonNavbar'>
                {nombre}
            </button>
        </Link>
    );
  }


BotonNavbar.propTypes = {
    nombre: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired 
};