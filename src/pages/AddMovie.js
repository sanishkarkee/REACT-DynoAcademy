import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AddMovie = () => {
  const addMovieHandler = async (e) => {
    e.preventDefault();

    // Payload ko object construct gareko because send garne data "OBJECT" type ma hunu parxa
    const movieData = {
      movie_name: 'Dummy Movie',
      rating: 10,
      description: 'This is a good movie!',
    };

    try {
      const response = await axios.post(
        'https://api.dynoacademy.com/test-api/v1/movies',
        movieData
      );

      alert(response.data.message);
    } catch (error) {}
  };

  return (
    <>
      <Link to='/'>Home</Link>
      <br /> <br />
      <form onSubmit={addMovieHandler}>
        <input type='text' placeholder='Movie Name' /> <br /> <br />
        <input type='text' placeholder='Rating' /> <br /> <br />
        <textarea></textarea> <br /> <br />
        <button type='submit'>Add a Movie</button>
      </form>
    </>
  );
};

export default AddMovie;
