import React, { useState } from 'react';

const ContactAdder = () => {
  const [name, setName] = useState('John');

  const onClickHandler = () => {
    setName('Dave');
    console.log(name);
  };

  return (
    <>
      <div className='simpleAdder'>
        Contact Adder:
        <button onClick={onClickHandler}>Click me!</button>
        <div>My name is {name}.{name==="Dave" ? "I live in Nepal" :""}</div>
      </div>
    </>
  );
};

export default ContactAdder;
