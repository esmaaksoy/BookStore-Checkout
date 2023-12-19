import { useEffect, useState} from "react"

import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios"
const ProductList = () => {
  const [product,setProduct] = useState()
  const getProducts = async()=>{
    try {
      const res= await axios("https://658178db3dfdd1b11c435c4e.mockapi.io/products")
  setProduct(res.data)

    } catch (error) {
      
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
 
  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        <p className="text-center text-danger w-100">Loading....</p>

        <>
          <article id="product-panel" className="col-md-5">
            {product?.map((item)=> (<ProductCard {...item} getProducts={getProducts}/>)) }
           
          </article>
          <article className="col-md-5 m-3">
            <CardTotal />
          </article>
        </>

        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
