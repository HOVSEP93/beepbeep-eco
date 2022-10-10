import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-blod mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, odio nihil reprehenderit nesciunt nostrum officia.
              Perspiciatis sed maiores delectus illo inventore. Cupiditate,
              earum? Corrupti officiis in error, repellat nemo eaque! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Expedita, odio
              nihil reprehenderit nesciunt nostrum officia. Perspiciatis sed
              maiores delectus illo inventore. Cupiditate, earum? Corrupti
              officiis in error, repellat nemo eaque! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Expedita, odio nihil
              reprehenderit nesciunt nostrum officia. Perspiciatis sed maiores
              delectus illo inventore. Cupiditate, earum? Corrupti officiis in
              error, repellat nemo eaque! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Expedita, odio nihil reprehenderit
              nesciunt nostrum officia. Perspiciatis sed maiores delectus illo
              inventore. Cupiditate, earum? Corrupti officiis in error, repellat
              nemo eaque!
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </Link>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7D6f9Ty5OPX_K2CN9idj1JZiFCbEMbAiLQ&usqp=CAU"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
