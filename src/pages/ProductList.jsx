import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import loadingImage from "../assets/loading.gif";
const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
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
        <img src={loadingImage} alt="loading" className="w-25"/>
      </div>
    );
  } else if (product?.length === 0) {
    return (
      <div className="container mt-3 rounded-5 bg-dark p-3">
        <p className="text-center text-dark w-100 display-1 text-white ">
          No Books...
        </p>
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <div className={"bg-light d-sm-block d-md-flex"}>
          <>
            <article id="product-panel" className="col-md-5">
              {product?.map((item) => (
                <ProductCard
                  item={item}
                  getProducts={getProducts}
                />
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal product={product} />
            </article>
          </>
        </div>
      </div>
    );
  }
};

export default ProductList;
