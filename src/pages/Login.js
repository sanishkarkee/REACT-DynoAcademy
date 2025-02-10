import axios from 'axios';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
      <form onSubmit={loginHandler}>
        Email: <br />
        <input type='text' ref={email} />
        <br />
        <br />
        Password: <br />
        <input type='password' ref={password} />
        <br />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
