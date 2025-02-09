import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AddMovie = () => {
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
        movieData
      );

      alert(response.data.message);
    } catch (error) { 
      alert()
    }
  };

  return (
    <>
      <Link to='/'>Home</Link>
      <br /> <br />
      <form onSubmit={addMovieHandler}>
        Movie Name: <br />
        <input
          type='text'
          placeholder='Movie Name'
          ref={movie_name_reference}
        />
        <br /> <br />
        Ratings: <br />
        <input
          type='text'
          placeholder='Rating'
          ref={rating_reference}
        /> <br /> <br />
        Descritpion: <br />
        <textarea ref={desc_reference}></textarea> <br /> <br />
        <button type='submit'>Add a Movie</button>
      </form>
    </>
  );
};

export default AddMovie;
