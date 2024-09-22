import Contact from './components/Contact';
import ContactAdder from './components/ContactAdder';
import './styles/app.css';

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
      <div className='contact_adder'>
        <ContactAdder/>
      </div>

      <div className='contact_list'>
        <h3>Contact List:</h3>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </div>
    </>
  );
};

export default App;
