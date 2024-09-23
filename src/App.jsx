/*
    POINTS TO REMEMBER:
    1) Project start garnu bhanda paila chai euta DUMMY OBJECT banayera tya static data enter garne
       ani tyo static data haru use garera chai Components haru banaune ani paxi static data lai dynamic data le replace garne
    2) parent -child = > pass props
       child -parent  => create funcn in parent and pass them as props to child, ani child ma tyo function cal garera tes bhitra data pass garne
    3) OPERATIONS:
          * user le data enter garxa  ⇒ (In ContactAdder.jsx)
          * enter gareko data bata custom object banxa  ⇒ (In ContactAdder.jsx)
          * Custom object Parent component(App.jsx) ma pass hunxa  ⇒ (from ( ContactAdder.jsx  to  App.jsx))
          * Custom object ko data list ma display garinxa  ⇒ (In App.jsx)
*/

import { useState } from 'react';
import Contact from './components/Contact';
import ContactAdder from './components/ContactAdder';
import './styles/app.css';

const App = () => {
  const initialContacts = [
    {
      name: 'John',
      number: '1111',
      location: 'Nepal',
    },
    { name: 'Sanish', number: '2222', location: 'Australia' },
    { name: 'Ram', number: '3333', location: 'USA' },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  // ContactAdder.js bhayeko custom object ko data ACCESS garna lai
  const addContactData = (contactData) => {
    setContacts([contactData, ...contacts]);
    // console.log(contacts);
  };

  return (
    <>
      <div className='contact_adder'>
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className='contact_list'>
        <h3>Contact List:</h3>

        {/* ()=> { must use RETURN keyword } /  ()=> ( dont need to use RETURN keyword) */}
        {contacts.map((data) => {
          // console.log(data);
          return <Contact data={data} />;
        })}
      </div>
    </>
  );
};

export default App;
