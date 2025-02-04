import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ViewMovie = () => {
  const getParams = useParams(); // {id:'3'}
  const getId = getParams.id; //3

  console.log(getId);

  return <>View Movie {getId}</>;
};

export default ViewMovie;
