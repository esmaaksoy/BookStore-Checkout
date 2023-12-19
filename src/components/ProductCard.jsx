import React from "react";
import axios from "axios";
const ProductCard = ({name,image,id,price,amount,dumpingRate,getProducts}) => {
  const deleteProduct = async()=>{
    try {
      await axios.delete(`https://658178db3dfdd1b11c435c4e.mockapi.io/products/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getProducts()
  }
  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            height="250px"
            title={""}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
            {name}
            </h5>
            <div className="product-price">
              <p className="text-warning h2">
                $<span className="damping-price"> {price}</span>
                <span className="h5 text-dark text-decoration-line-through">
                {price}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
             {amount}
                </p>
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button className="btn btn-danger btn-sm w-100 remove-product" onClick={()=>deleteProduct(id)}>
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $<span className="product-line-price">Total</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
