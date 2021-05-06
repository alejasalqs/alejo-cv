import React from "react";

export const ProyectCard = ({ description, name, url, img }) => {
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
          <button
            className="btn btn-outline-primary"
            onClick={() => handleOnClick(url)}
          >
            See proyect
          </button>
        </div>
      </div>
    </div>
  );
};
