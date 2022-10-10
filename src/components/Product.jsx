import React from "react";
import { DATA } from "../Data";
import { Link } from "react-router-dom";

const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        {/* /* Rendering the image from the data.js file. */}
        <img
          src={item.img}
          className="card-img-top"
          alt={item.title}
          height="200px"
        />
        {/* /* This is the card body. */}
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <Link to={`/products/${item.id}`} className="btn btn-outline-primary">
            تفاصيل
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>المنتجات</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};
export default Product;
