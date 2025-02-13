import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MovieNavBar from '../Components/MovieNavBar';
import { Container } from 'react-bootstrap';

const AddMovie = () => {
  //Data submit paxi index page ma redirect garna lai
  const history = useHistory();

  const movie_name_reference = useRef();
  const rating_reference = useRef();
  const desc_reference = useRef();

  const addMovieHandler = async (e) => {
    e.preventDefault();

    // Payload ko object construct gareko because send garne data "OBJECT" type ma hunu parxa
    const movieData = {
      movie_name: movie_name_reference.current.value,
      rating: rating_reference.current.value,
      description: desc_reference.current.value,
    };

    try {
      const response = await axios.post(
        'https://api.dynoacademy.com/test-api/v1/movies',
        movieData,
        {
          timeout: 100000,
        }
      );

      alert(response.data.message);

      history.replace('/');
    } catch (error) {
      // Known error ra unknown error aako bela k message show garne bhanera
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert('Unknown error occured. Try again later.');
      }
    }
  };

  return (
    <>
      <MovieNavBar />

      <Container>
        <form onSubmit={addMovieHandler}>
          <h2 className='text-center py-3'>Enter movie details</h2>

          <div className='p-5 border'>
            <div className='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>
                Movie Name
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter movie name '
                ref={movie_name_reference}
              />
            </div>
            <div className='mb-3'>
              <label for='exampleFormControlInput2' class='form-label'>
                Ratings
              </label>
              <input
                type='number'
                className='form-control'
                id='exampleFormControlInput2'
                placeholder='Enter ratings here '
                ref={rating_reference}
              />
            </div>
            <div className='mb-3'>
              <label for='exampleFormControlTextarea1' class='form-label'>
                Movies Description
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                placeholder='Movies description here'
                ref={desc_reference}
              ></textarea>
            </div>

            <button type='submit' className='btn btn-primary'>
              Add a movie
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddMovie;
