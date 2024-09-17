import Contact from './components/Contact';
import './styles/app.css';
import Wrapper from './Wrapper';

const App = () => {
  const contacts = [
    {
      name: 'John',
      number: '1111',
      location: 'Nepal',
    },
    { name: 'Sanish', number: '2222', location: 'Australia' },
    { name: 'Ram', number: '3333', location: 'USA' },
  ];

  return (
    <>
      <Wrapper>
        <h3>Contact List:</h3>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </Wrapper>
    </>
  );
};

export default App;
