import React from 'react';

const JSXBriefCrashCourse = () => {
  // Single Variable example
  const name = 'John';
  // Expression example
  const x = 10;
  const y = 20;
  //   Loop example
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  //   Conditional example
  const loggedIn = true;
  //   Put a style in a variable || But no recommended because we are using Tailwind to add classes
  const styles = {
    color: 'red',
    fontSize: '55px',
  };
  return (
    <>
      <div className="text-5xl">App</div>
      {/* Addin inline style */}
      {/* <p style={{ color: 'red', fontSize: '24px' }}>Hello {name}</p> */}
      {/* Using a variable that has style */}
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Member</h1>} */}
      {/* {loggedIn ? <h1>Hello Member</h1> : ''} */}
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default JSXBriefCrashCourse;
