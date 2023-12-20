import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import loadingImage from "../assets/loading.gif";
const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
const [topTotal, setTopTotal] = useState(0);
const updateTotal=(productId,productTotal)=>{
  setTopTotal((prevTotal)=>prevTotal+ productTotal)
}

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios(
        "https://658178db3dfdd1b11c435c4e.mockapi.io/products"
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  if (loading) {
    return (
      <div className="container mt-3 text-center">
        <img src={loadingImage} alt="loading" />
      </div>
    );
  } else if (product?.length === 0) {
    return (
      <div className="container mt-3">
        {" "}
        <p className="text-center text-danger w-100">
          No products data...
        </p>{" "}
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <div className={"bg-light d-sm-block d-md-flex"}>
          <>
            <article id="product-panel" className="col-md-5">
              {product?.map((item) => (
                <ProductCard {...item} getProducts={getProducts} updateTotal={updateTotal}/>
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal topTotal={topTotal}/>
            </article>
          </>
        </div>
      </div>
    );
  }
};

export default ProductList;
