import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SingleMovie = (props) => {
  return (
    <>
      <Col key={props.data.id}>
        <div className='card p-3'>
          <img
            src={props.data.image}
            className='card-img-top'
            alt='movie_image'
            style={{ height: '200px', objectFit: 'contain' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{props.data.name}</h5>
            <p className='card-text'>{props.data.info}</p>
            {/* button section */}
            <Link to={`/view_movie/${props.data.id}`}>
              <button className='btn btn-dark text-light'>View Details</button>
            </Link>
          </div>
        </div>

        {/* ----------------------------------------- */}
        {/* <div
          key={props.data.id}
          style={{ marginBottom: '20px' }}
          className='bg-light border border-1 rounded-2 border-dark-subtle'
        >
          <div className='p-4 d-flex flex-column'>
            <Link to={`/view_movie/${props.data.id}`}>
              <span style={{ fontWeight: 'bold' }} className='pb-2'>
                {props.data.name}
              </span>
            </Link>
            <img
              src={props.data.image}
              alt='Movie Image'
              style={{ width: '80px', height: '100px' }}
            />
            Info:{props.data.info}
            Rating: {props.data.rating ? props.data.rating : '0'}
          </div>
        </div> */}
      </Col>
    </>
  );
};

export default SingleMovie;
