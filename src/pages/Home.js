import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      const showData = await response.data;
      setShows(showData);
      console.log(showData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-3 mb-4" key={show.show.id}>
            <Card
              name={show.show.name}
              language={show.show.language}
              image={show.show.image && show.show.image.medium} // Use the medium-sized image if available
            summary = {show.show.summary}
            id ={show.show.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
