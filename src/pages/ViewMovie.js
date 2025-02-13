import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

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
      <Container className='bg-info-subtle border border-1 rounded-2 border-dark-subtle mt-4'>
        <p className='pt-2 mb-0'>View Movies:{getId} </p>
        <br />
        <h1 className='my-2'>{movieData.name}</h1>
        <br />
        Info:
        <div class='card'>
          <div class='card-body'>{movieData.info}</div>
        </div>
        <br />
        <br />
        Description:
        <div class='card'>
          <div class='card-body'>{movieData.desc}</div>
        </div>
        <br />
        <br />
        Rating:
        <div class='card'>
          <div class='card-body'>{movieData.rating}</div>
        </div>
        <br />
        <br />
        Image :
        <div class='card'>
          <div class='card-body'>
            <img src={movieData.image} alt='' style={{ height: '200px' }} />
          </div>
        </div>
        <br />
        <Link to='/'>
          <Button className='btn btn-success '>Go Back!</Button>
        </Link>
      </Container>
    </>
  );
};

export default ViewMovie;
