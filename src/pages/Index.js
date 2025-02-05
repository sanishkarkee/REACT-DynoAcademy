import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Index = () => {
  // 3) -----ASYNCS-AWAIT

  const [movies, setMovies] = useState([]);

  // Kun case ma error message dekhauna ko lagi
  const [isError, setIsError] = useState(false);

  // For displaying CUSOTM ERROR MESSAGE
  const [errorText, setErrorText] = useState('');

  // For Searching Movies
  const [searchMovieText, setSearchMovieText] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  // For Searching Movies
  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      fetchMovies();
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(fetchTimer);
    };
  }, [searchMovieText]);

  const fetchMovies = async () => {
    try {
      // list movies + searh movies included
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      );
      setMovies(response.data.moviesData); //Axios le jaile pani "data" bhitra data haru pathako hunxa
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorText('Cannot get movies info!');
    }

    console.log(movies);
  };

  return (
    <div className='App'>
      <b>SUGGESTED MOVIES:</b>

      <div>
        <input
          type='text'
          value={searchMovieText}
          placeholder='Type movies title'
          onChange={(e) => setSearchMovieText(e.target.value)}
        />
      </div>

      <br />
      {/* Error aako ra na-aako case ma k dekhaune: */}
      {isError ? (
        <>
          <div
            style={{
              background: 'red',
              color: '#fff',
              padding: '10px',
              margin: '10px',
            }}
          >
            {errorText}
          </div>
        </>
      ) : (
        <>
          <div
            style={{ background: '#e7e7e7', padding: '10px', margin: '5px' }}
          >
            {movies.map((el) => (
              <div key={el.id} style={{ marginBottom: '20px' }}>
                <Link to={`/view_movie/${el.id}`}>
                  <span style={{ fontWeight: 'bold' }}>{el.name}</span>
                </Link>
                <br />
                <img
                  src={el.image}
                  alt='Movie Image'
                  style={{ width: '80px', height: '100px' }}
                />
                <br />
                Info:{el.info}
                <br />
                Rating: {el.rating ? el.rating : '0'}
                <br />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
