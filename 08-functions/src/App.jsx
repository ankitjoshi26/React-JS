import React from 'react';

const App = () => {

  const inputChanging = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div
        className='box'
        onMouseMove={(elem) => {
          inputChanging(elem);
        }}
      >
      </div>
    </div>
  );
};

export default App;