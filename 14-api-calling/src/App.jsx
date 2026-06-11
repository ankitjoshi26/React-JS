import React from 'react';
import axios from 'axios'
import { useState } from 'react';
const App = () => {

  // Using fetch method

  // async function getData () {
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // console.log(response);
  // const data = await response.json();
  // console.log(data);
  // }


  // Using axios method

  // const getData = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response.data);
    

  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')   // Destructuring
  //   console.log(data);
    
  // }



  // USING DATA AFTER FETCHING

  const [data, setData] = useState([])
  

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');

    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map(function(elem, idx){
        return <h3>Hello {elem.author} {idx}</h3>
      })}
    </div>
  );
}

export default App;
