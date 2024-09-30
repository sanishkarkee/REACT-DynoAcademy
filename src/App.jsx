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
  // 2] localstorage ma save bhayeko data lai useState ma pass garem
  const getContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  // ContactAdder.js bhayeko custom object ko data ACCESS garna lai
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);

    // 1] aako data lai localstorage ma save garem
    localStorage.setItem('contacts', JSON.stringify(allContacts));
  };

  return (
    <>
      <div className='contact_adder'>
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className='contact_list'>
        <h3>Contact List:</h3>

        {/* Map garda chai id ma array ko index OR cutsom ID ni pass garna sakinxa */}

        {/* index ma chai array ko number hunxa like 0,1,2,...
        {contacts.map((data, index) => {
          // console.log(data);
          return <Contact key={index} data={data} />;
        })}

              OR */}

        {contacts.map((data) => {
          // console.log(data);
          return <Contact key={data.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default App;
