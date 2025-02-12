import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MovieNavBar = () => {
  return (
    <>
      <Navbar className=' bg-dark '>
        <Container>
          <Navbar.Brand href='#home'>
            <Link
              to='/'
              className='text-light  border border-light p-2 rounded-2'
            >
              Movie Suggestor
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end gap-3'>
            <Navbar.Text>
              <Link to='/add' className='text-light '>
                Add a Movie
              </Link>
            </Navbar.Text>

            <Navbar.Text>
              {/* logged in xa bhane "profile" page show garna instead of "login" */}
              {localStorage.getItem('accessToken') ? (
                <>
                  <Link to='/profile' className='text-light '>
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link to='/login' className='text-light text-decoration-none'>
                    Login
                  </Link>
                </>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MovieNavBar;
