import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../firebase";
import "../../scss/components/_ItemDetailContainer.scss";
import ItemCountComponent from "../ItemCount/ItemCountComponent";
import { CartContextComponent } from '../CartContextComponent/CartContextComponent';
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function ItemDetailContainer() {
    const [product, setProduct] =  useState(null);
    const {id} = useParams();
    const {agregarAlCarrito} = useContext(CartContextComponent);
    const [count, setCount] = useState(0);
    const [ProductoAgregado, setProductoAgregado] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(()=> {

          getProduct(id).then((data) => setProduct(data));
          setLoading(false);
        }, 1000)
        
        return () => clearTimeout(timeout);

    }, [id]);

    const handleAgregarAlCarrito = () => {
      if (product && count > 0){

        agregarAlCarrito(product, count);
        setProductoAgregado(true);
      }
    };

    const handleContador = (newCount) => {
      setCount(newCount);
      setProductoAgregado(false);
  };

  if(loading){
    return < LoadingComponent/>
  }

  if(!product){
    return <div className="DetailCharging">Producto no encontrado</div>;
  }

    return(
        <>
          <div className="Detail">
            <div className="DetailContainer">
                  <h2>{product.title}</h2>
                  <img src={product.img} alt={product.title} />
                  <p><strong>Descripción:</strong> {product.description}</p>
                  <p><strong>Categoría:</strong> {product.category}</p>
                  <p>RD$ {product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <ItemCountComponent count={count} setCount={handleContador}/>
                  <div className="carrito">
                    <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                    {ProductoAgregado && (
                      <Link to="/CartComponent">
                        <button>Ir al carrito</button>
                      </Link>
                    )}
                  </div>
              </div>
          </div>
        </>
    );
}
