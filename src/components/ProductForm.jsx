import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const ProductForm = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    amount: 1,
    image: "",
  });
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { name, price, amount, image } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, amount, image };
    postProduct(newProduct);
    setData({  
    name: "",
    price: "",
    amount: "",
    image: "",})
    Swal.fire({
      text:"New book added.",
      icon:"success",
      iconColor:"green",
      confirmButtonText:"ok",
      confirmButtonColor:"green"
      })
  };

  const postProduct = async (newProduct) => {
    try {
      await axios.post(
        "https://658178db3dfdd1b11c435c4e.mockapi.io/products/",
        newProduct
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">Add New Book </h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
          Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="add-name"
            required
            onChange={handleData}
            name="name"
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
           Book Price
          </label>
          <input
            type="number"
            className="form-control"
            id="add-price"
            required
            onChange={handleData}
            name="price"
            value={price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Book Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="add-quantity"
            required
            onChange={handleData}
            name="amount"
            value={amount}
          />
        </div>
        <label htmlFor="add-image" className="form-label">
         Book Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
            onChange={handleData}
            name="image"
            value={image}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-book me-2"></i>Save To Book
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
