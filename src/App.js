import axios from 'axios';
import { useState } from 'react';

function App() {
  // 3) -----ASYNCS-AWAIT

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    // 1)- Fetch resource...
    console.log('Calling API');

    try {
      const response = await axios.get(
        'https://api.dynoacademy.com/test-api/v12/movies'
      );
      setMovies(response.data.moviesData); //Axios le jaile pani "data" bhitra data haru pathako hunxa
    } catch (error) {
      alert('Cannot get movies data.');
    }

    console.log(movies);
  };

  return ( 
    <div className='App'>
      <button onClick={fetchMovies}>Get all movies</button>
      <br />

      <div style={{ background: '#e7e7e7', padding: '10px', margin: '5px' }}>
        {movies.map((el) => (
          <div key={el.id} style={{ marginBottom: '10px' }}>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
