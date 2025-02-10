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

  // Search ma 3 character na huda ko ERROR
  const [searchErrorText, setSearchErrorText] = useState('');

  // Loading icon show garna when the process is running
  const [loading, setLoading] = useState(false);

  // loading 2 palta chalxa kina bhane : initial page load huda ra dependency change huda so yo behaviour hatauna lai use gareko ho
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  // For Searching Movies
  useEffect(() => {
    if (!firstRun) {
      const fetchTimer = setTimeout(() => {
        //Typed character 3 or more xa bhane display garne
        if (searchMovieText && searchMovieText.length > 2) {
          fetchMovies();
        }
        // 0 character xa bhane ,sabai movie display garne
        else if (searchMovieText.length < 1) {
          fetchMovies();
        } else {
          setSearchErrorText('Please enter atleast 3 characters for searching');
        }
      }, 2000);

      // Cleanup function
      return () => {
        clearTimeout(fetchTimer);
      };
    }
  }, [searchMovieText]);

  const fetchMovies = async () => {
    setLoading(true);
    setSearchErrorText('');
    try {
      // list movies + searh movies included
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      );
      setMovies(response.data.moviesData); //Axios le jaile pani "data" bhitra data haru pathako hunxa
      setIsError(false);
      setLoading(false);
      setFirstRun(false);
    } catch (error) {
      setIsError(true);
      setErrorText('Cannot get movies info!');
      setLoading(false);
      setFirstRun(false);
    }

    console.log(movies);
  };

  return (
    <div className='App'>
      <div>
        <Link to='/add'>Add a Movie</Link> |
        {/* logged in xa bhane "profile" page show garna instead of "login" */}
        {localStorage.getItem('accessToken') ? (
          <>
            <Link to='/profile'>Profile</Link>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
          </>
        )}
      </div>

      <div>
        <input
          type='text'
          value={searchMovieText}
          placeholder='Type movies title'
          onChange={(e) => setSearchMovieText(e.target.value)}
        />

        <span style={{ color: 'red' }}>{searchErrorText}</span>
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
            {/* Loading */}
            <div>{loading ? <>loading.....</> : <></>}</div>

            {!loading && movies.length < 1 ? (
              <>
                The movie <b> {searchMovieText} </b> isn't available in our
                library!
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
