import PropTypes from 'prop-types';
import "../../scss/components/_BotonNavbar.scss";
import "../../scss/utilities/_variables.scss"
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContextComponent } from '../CartContextComponent/CartContextComponent';

export default function BotonNavbar({ nombre, link }) {

    const {menuClose} = useContext(CartContextComponent)

    return (
        <Link to={link} onClick={menuClose}>
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