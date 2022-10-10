import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItemReducer);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const cartItems = (cartItem) => {
    return (
      <di className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close  float-end "
            aria-label="Close"
          >
            {" "}
          </button>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height="200px"
                width="100px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-blod">{cartItem.price}</p>
            </div>
          </div>
        </div>
      </di>
    );
  };
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const button = () => {
    return (
      <div className="container py-4">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To Check Out
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};
export default Cart;
