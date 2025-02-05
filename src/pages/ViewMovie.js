import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ViewMovie = () => {
  const getParams = useParams(); // {id:'3'}
  const getId = getParams.id; //3
  //   console.log(getId);

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getSingleMovieInfo();
  }, []);

  const getSingleMovieInfo = async () => {
    try {
      // yo API bata 1 ta movie ko info aako xa so ,Yo component ma MAP garnu pardaina
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getId}`
      );
      setMovieData(response.data.singleMovieData);
    } catch (error) {
      alert('Error occured!');
    }
  };

  return (
    <>
      <b>View Movies: </b> {getId}
      <br />
      <h2>Movie Detail:</h2>
      <br />
      Movie Name: {movieData.name} <br /> <br />
      Info: {movieData.info} <br /> <br />
      Description: {movieData.desc} <br /> <br />
      Rating: {movieData.rating} <br /> <br />
      Image : <br /> <br />
      <img src={movieData.image} alt='' style={{ height: '200px' }} />
    </>
  );
};

export default ViewMovie;
