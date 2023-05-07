import React, { useState,useEffect } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [show, setShow] = useState([]);
  const Id = localStorage.getItem("Id")

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${Id}`);
      const showData = await response.data;
      setShow(showData);
      console.log(setShow)
    } catch (error) {
      console.log(error);
    }
  };

  const summaryHtml = show.summary
  const tempElement = document.createElement('div');
  tempElement.innerHTML = summaryHtml;


const textContent = tempElement.textContent || tempElement.innerText;


  const handleFormSubmit = (e) => {
    e.preventDefault();

  // Create an object with user details
  const userDetails = {
    movieName: show.name,
    userName: name,
    userEmail: email,
  };

  // Save user details to localStorage
  localStorage.setItem('userDetails', JSON.stringify(userDetails));


  localStorage.removeItem("Id")
  
  };

  return (
    <div className="container mt-4 mx-auto" style={{padding:'0'}} >
      <div className="row">
        <div className="col-md-12 d-flex mb-3" style={{border:"1px solid grey"}}>
        <div className="container mt-2">
          <h3>Movie Name: {show.name}</h3>
          <b>Summary:</b>
          <p> {textContent}</p>
          <p>Official website: <a href={show.officialSite}>{show.officialSite}</a></p>
          </div>
          <img src={show.image && show.image.medium} alt="movie" />
        </div>
        <div className="col-md-4 mx-auto my-4" >
          <h2>Book Show</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
