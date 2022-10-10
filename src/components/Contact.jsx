import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8oL0JWWC6raG4G-5FUhwVwh2P09hfZAFug&usqp=CAU"
              alt="contact "
              height="300px"
              width="300px"
            />
          </div>

          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="الاسم"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  placeholder="قل شيئا"
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                {" "}
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
