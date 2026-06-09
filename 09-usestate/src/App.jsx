// import React, { useState } from 'react';

// const App = () => {

//   const [num, setNum] = useState(10)
//   const [user, setUser] = useState('Ankit')

//   // num : read only, setNum : write
//   function setNumber(){
//     setNum(20);
//     setUser('Rahul');
//   }

//   return (
//     <div>
//       <h1>Value of num is {num} </h1>
//       <button onClick={setNumber}>Click me</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [data, setData] = useState({user: 'Ankit', age: 21})

  // Changing values of variable=>

  // function increaseNum(){
  //   setNum(num + 1);
  // }

  // function decreaseNum(){ 
  //   if(num > 0){
  //     setNum(num - 1);
      
  //   }
  // }

  // function jumpByFive(){
  //   setNum(num + 5);
  // }

  // function setZero(){
  //   setNum(0);
  // }


  // Changing values in an object (same for array)=>

    const btnClicked = () => {
      // const newData = {...data};
      // newData.user = "Rahul"
      // newData.age = 22
      // setData(newData);

      // or 

      setData(prev => ({...prev, age:22}));
      // setData(prev => ({...prev, user:'rahul',age:22}));

    }


  return (
    <div className="box">

      {/* <h1>{num}</h1>
      <div>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpByFive}>Jump by 5</button>
      <button onClick={setZero}>Set 0</button>
      </div> */}

      {/* for object */}
      <div>
        <h3>Name of user is {data.user}</h3>
        <h3>Age of user is {data.age}</h3>
        <button onClick={btnClicked}>Click me</button>
      </div>
    </div>
  );
}

export default App;
