import React from 'react';

const ContactAdder = () => {
  const onClickHandler = () => {
    console.log('Clicked');
  };
  return (
    <>
      <div className='simpleAdder'>
        Contact Adder:
        <button onClick={onClickHandler}>Click me!</button>
      </div>
    </>
  );
};

export default ContactAdder;
