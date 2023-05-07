import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { name, image, language,id } = props;
  const handleBookShow = () => {
    localStorage.setItem('movieName', name);
    localStorage.setItem("Id",id)
  };

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <div className="card mx-auto mt-4" style={{ width: '18rem' }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Language: {language}</p>
            <Link to="/book-show" className="btn btn-primary" onClick={handleBookShow}>
              Book a ticket
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
