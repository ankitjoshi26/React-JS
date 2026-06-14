// import React, { useState } from 'react';
import Button from './components/Button';
import Navbar from './components/Navbar';

const App = () => {
  // const [theme, setTheme] = useState('Light');
  return (
    <div>
      <Navbar>
        <h2>This is navbar</h2>
      </Navbar>
      <Button/>
    </div>
  );
}

export default App;
