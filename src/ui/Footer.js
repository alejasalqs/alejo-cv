import React from "react";

export const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white mt-5"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/asalgueroq"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/alejandro-salguero/"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/alejasalqs"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center text-dark p-3">
          Created by Alejandro Salguero.
        </div>
        <div className="text-center text-dark p-3">
          If you want to get in touch with me please send me an email at:
          <a className="text-dark" href="mailto:alejandrosalguero@hotmail.com">
            alejandrosalgueroq@hotmail.com
          </a>
        </div>
      </footer>
    </>
  );
};
