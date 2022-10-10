import React from "react";
import { useParams } from "react-router";
import { DATA } from "../Data";
// import { useState } from "react";
// import { addItem, delItem } from "../redux/actions/index";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  // const [cartBtn, setCartBtn] = useState("Add TO CART");

  // {
  //   /* now we  need a product id which is pass from the product page */
  // }
  const productId = useParams();
  const proDetail = DATA.filter((el) => el.id == productId.id);
  const product = proDetail[0];
  // we need to store useDispatch in a variable
  const dispatch = useDispatch();
  // const handleCart = (product) => {
  //   if (cartBtn === "ADD TO CART") {
  //     dispatch(addItem(product));

  //     setCartBtn("REMOVE FROM CART ");
  //   } else {
  //     dispatch(delItem(product));
  //     setCartBtn("ADD TO CART");
  //   }
  // };
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="300px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold"> {product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            {/* <button
              className="btn btn-outline-primary my-5"
              onClick={() => handleCart(product)}
            >
              {cartBtn}
            </button> */}
            <a
              href="https://www.apple.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="btn btn-outline-primary my-5">
                الذهاب لصفحة الفيس بوك
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
