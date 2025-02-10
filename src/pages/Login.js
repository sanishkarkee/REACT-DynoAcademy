import axios from 'axios';
import React, { useRef } from 'react';

const Login = () => {
  const email = useRef();
  const password = useRef();

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

      //   alert(response.data.message);

      if (response.data.status === 'success') {
        alert('Logged in successfully!');
      }
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
