import Contact from './components/Contact';

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
      <div className='container'>
        <h3>Contact List:</h3>

        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </div>
    </>
  );
};

export default App;
