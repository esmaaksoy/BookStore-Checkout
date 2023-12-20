import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom"
const Main = () => {
  const navigate = useNavigate()
  return (
    <main className="main">
     <Outlet />
      <div>
        <h1>Welcome to Our Bookstore...</h1>
        <div className="main-buttons">
          <button className="btn btn-outline-primary px-4" onClick={()=>navigate("newproduct")}>
            Add New Book
          </button>
          <button className="btn btn-primary px-4 ms-3" onClick={()=>navigate("productlist")}>See Books</button>
        </div>
      </div>
    </main>
  
  );
}
  


export default Main;
