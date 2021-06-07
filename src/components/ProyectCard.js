import React from "react";

export const ProyectCard = ({ description, name, url, img, repoURL }) => {
  const handleOnClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-primary"
                onClick={() => handleOnClick(url)}
              >
                <i className="fas fa-link"></i>
                <span> Project</span>
              </button>
            </div>
            <div className="col">
              {repoURL && (
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleOnClick(repoURL)}
                >
                  <i className="fab fa-github"></i>
                  <span> Code</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
