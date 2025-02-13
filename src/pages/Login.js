import axios from 'axios';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MovieNavBar from '../Components/MovieNavBar';
import { Container } from 'react-bootstrap';

const Login = () => {
  const email = useRef();
  const password = useRef();

  const history = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();

    // user entered value API through bata pathauna in CORRECT ORDER
    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.post(
        'https://api.dynoacademy.com/test-api/v1/login',
        loginData,
        {
          timeout: 100000,
        }
      );

      //   Access token lai variable ma save gareko
      const getAccessToken = response.data.accessToken;

      localStorage.setItem('accessToken', getAccessToken);

      if (response.data.status === 'success') {
        alert('Logged in successfully!');
      }

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

      <Container className='m-auto w-50'>
        <h2 className='text-center py-3'>Login Screen</h2>
        <form onSubmit={loginHandler} className='p-5 mt-2 border'>
          <div className='mb-3'>
            <label for='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              aria-describedby='emailHelp'
              ref={email}
              autoComplete={false}
            />
            {/* <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div> */}
          </div>

          <div class='mb-3'>
            <label for='exampleInputPassword1' class='form-label'>
              Password
            </label>
            <input type='password' className='form-control' ref={password} />
          </div>

          <button type='submit' class='btn btn-success'>
            Login
          </button>
        </form>
      </Container>
    </>
  );
};

export default Login;
