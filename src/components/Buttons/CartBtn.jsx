import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CartBtn = () => {
  // we get a state of additems
  const state = useSelector((state) => state.addItemReducer);
  return (
    <>
      <Link to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
      </Link>
    </>
  );
};
export default CartBtn;
