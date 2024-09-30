import { Component, useState } from 'react';

const ContactAdder = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');

  // READ THIS: click me button press gare paxi 3 ota operation hunxa
  const onClickHandler = () => {
    // Entered data lai chai CUSTOM OBJECT structure banako
    // 1) user le enter gareko data ko custom object banxa
    const contactData = {
      id: Math.random(), //Random key generate gareko, Mapping/display garda use hunxa so
      name: name,
      number: mobile,
      location: location,
    };

    //Checking empty input fields OR Validation
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert('Please fill all the fields');
    } else {
      // 2) custom object ma bhayeko data lai parent Component (App.jsx) ma pass garinxa
      props.onContactAdded(contactData);

      // 3) contact ADD bhaye chai input field clear garinxa
      setName('');
      setMobile('');
      setLocation('');
    }
  };

  return (
    <>
      <div className='simpleAdder'>
        <h3>Contact Adder:</h3> <br />
        <input
          type='text'
          value={name}
          placeholder='Contact name'
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <input
          type='text'
          value={mobile}
          placeholder='Mobile'
          onChange={(e) => {
            console.log(e.target.value);
            setMobile(e.target.value);
          }}
        />
        <input
          type='location'
          value={location}
          placeholder='Location'
          onChange={(e) => {
            console.log(e.target.value);
            setLocation(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={onClickHandler}>Add Contact</button>
      </div>
    </>
  );
};

export default ContactAdder;
