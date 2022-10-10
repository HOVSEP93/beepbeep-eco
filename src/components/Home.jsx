import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://mixedagency.com/wp-content/uploads/2020/06/xiphone-instagram-1-768x401.jpg.pagespeed.ic.O-SVsSy0Yp.jpg"
              className="d-block w-100"
              alt="Iphone"
              // height="500px"
              height="700px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/vecteurs-libre/modele-conception-carrousel-reseau-medias-sociaux-histoires-instagram-ecran-iphone-photorealiste_87538-1740.jpg?size=626&ext=jpg"
              className="d-block w-100"
              alt="Iphone"
              height="700px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.influenth.com/wp-content/uploads/2016/05/carrousel-instagram-publicit%C3%A9-influenth.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="700px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.bfmtv.com/rA325us3---Ds7hsVXXGSifrgJM=/1x13:929x535/640x0/images/Capture-d-ecran-d-iOS-15-1042975.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="700px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  );
};
export default Home;
