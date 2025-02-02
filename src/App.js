import axios from 'axios';

function App() {
  // 3) -----ASYNCS-AWAIT
  const fetchMovies = async () => {
    // 1)- Fetch resource...
    console.log('Calling API');
    const response = await axios.get(
      'https://api.dynoacademy.com/test-api/v1/movies'
    );
    console.log(response);
    console.log('Finish');

    // 2) -----PROMISE-----
    // const promise = new Promise((resolve, reject) => {
    //   const response = axios.get(
    //     'https://api.dynoacademy.com/test-api/v1/movies'
    //   );
    //   resolve(response);
    // });
    // promise
    //   .then((result) => {
    //     console.log(result);
    //     console.log('Finish');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className='App'>
      <button onClick={fetchMovies}>Get all movies</button>
      <br />

      <div
        style={{ background: '#e7e7e7', padding: '10px', margin: '5px' }}
      ></div>
    </div>
  );
}

export default App;
