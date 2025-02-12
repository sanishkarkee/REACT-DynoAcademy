import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MovieNavBar from '../Components/MovieNavBar';
import { Container } from 'react-bootstrap';

const Profile = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  //   User login bhayeko bela matra profile chalna lai
  const getProfile = async () => {
    const getAccessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.get(
        'https://api.dynoacademy.com/test-api/v1/me',
        {
          timeout: 100000,
          //   yo chai Profile Content GET garna khojne user chai authorized ho bhanera prove garna lai access token server ma pathako ho
          //   authorized user ho bhane matra profile ko content acces garna paux natra paudaina
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      //-----"response" ra "response.data" ma kasari data aako xa bhanne bujna lai matra----
      //   console.log(response);
      //   console.log(response.data);
      //   console.log(response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      // Known error ra unknown error aako bela k message show garne bhanera
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert('Unknown error occured. Try again later.');
      }
    }
  };

  const onLogOut = () => {
    localStorage.removeItem('accessToken');
    history.push('/');
  };

  return (
    <>
      <MovieNavBar />

      <Container className='mt-3'>
        Username: {userData.name} <br />
        Email: {userData.email} <br />
        Country: {userData.country} <br /> <br />
        <button onClick={onLogOut}>Logout</button>
      </Container>
    </>
  );
};

export default Profile;
