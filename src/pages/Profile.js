import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Profile = () => {
  const history = useHistory();

  useEffect(() => {
    getProfile();
  }, []);

  //   User login bhayeko bela matra profile chalna lai
  const getProfile = async () => {
    try {
      const response = await axios.get(
        'https://api.dynoacademy.com/test-api/v1/me',
        {
          timeout: 100000,
        }
      );
      console.log(response);
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
      <button onClick={onLogOut}>Logout</button>
    </>
  );
};

export default Profile;
