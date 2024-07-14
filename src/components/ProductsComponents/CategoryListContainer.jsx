import "../../scss/components/_ItemListContainer.scss";
import { useEffect, useState } from "react";
import { getProducts } from "../../firebase";
import CardProducts from "./CardProducts";
import { useParams } from "react-router-dom";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

  export default function CategoryListContainer() { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect( () =>{
      const timeout= setTimeout(() => {
        getProducts().then((data) => {
          setProducts(data)
        });
        
        setLoading(false)
      }, 1000)
      
      //Limpiamos el clearTimeout en caso de que el componente se desmonte antes.
      return () => clearTimeout(timeout)

    }, []);

    if(loading){

      return <LoadingComponent/>
    }

    return (
      <>
          <div className="cardInstrumentTienda">
            {products
            .filter((product) => product.category === id )
            .map((product) => (
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

  