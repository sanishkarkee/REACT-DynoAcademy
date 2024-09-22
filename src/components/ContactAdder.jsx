import React, { useState } from 'react';
import { Chris, Dave, John } from './Persons';

const ContactAdder = () => {
  const [name, setName] = useState('John');

  const onClickHandler = () => {
    setName('Chris');
    console.log(name);
  };

  let resultsCard;
  if (name === 'Dave') {
    resultsCard = <Dave />;
  } else if (name === 'John') {
    resultsCard = <John />;
  } else if (name === 'Chris') {
    resultsCard = <Chris />;
  }

  return (
    <>
      <div className='simpleAdder'>
        Contact Adder:
        <button onClick={onClickHandler}>Click me!</button>
        <div>
          My name is {name}.{resultsCard}
        </div>
      </div>
    </>
  );
};

export default ContactAdder;
