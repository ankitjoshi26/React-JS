import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(20);

  useEffect(function(){
    console.log('use effect is running');
  },[num])  // [] : known as dependency, when we pass something inside this array it mean useEffect is now dependent on that. so useEffect will run when any action perform on that dependency.

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}

      onMouseMove={() => {
        setNum2(num2 + 5)
      }}>Click</button>
    </div>
  );
}

export default App;