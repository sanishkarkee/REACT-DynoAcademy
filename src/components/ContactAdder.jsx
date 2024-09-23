import { useState } from 'react';

const ContactAdder = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');

  const onClickHandler = () => {
    console.log('Clicked');
  };

  return (
    <>
      <div className='simpleAdder'>
        Contact Adder: <br />
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
        <button onClick={onClickHandler}>Click me!</button>
      </div>
    </>
  );
};

export default ContactAdder;
