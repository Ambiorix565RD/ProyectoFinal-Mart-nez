import "./ItemListContainer.css";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getProducts } from "../../firebase";
import CardProducts from "./CardProducts";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

  export default function ItemListContainer({ greeting }) { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
      const timeout = setTimeout(() => {
        getProducts().then((data) => setProducts(data));
        setLoading(false);

      }, 1000);
      
      //Limpiamos el clearTimeout en caso de que el componente se desmonte antes.
      return () => clearTimeout(timeout)

    }, []);

    if(loading){
      return <LoadingComponent/>
    }


    return (
      <>
      <h2 className="texto">{greeting}</h2>
          <div className="card-instrument-tienda">
            {products.map((product) => (
              <CardProducts 
                key = {product.id}
                title = {product.title}  
                img = {product.img}
                price = {product.price}
                idItem = {product.id}
               />
            ))}
          </div>
      </>
    );
  }

  
  ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
  };