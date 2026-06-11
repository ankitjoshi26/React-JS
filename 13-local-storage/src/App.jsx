import React from 'react';

const App = () => {

  // LOCAL STORAGE METHODS:

  // localStorage.setItem('user', 'Ankit Joshi')     // used for save data in local storage, data is stored in local storage in key value pair
  // const user = localStorage.getItem('user')  // used for get item using their key.
  // localStorage.removeItem('user')   // used to remove particular data using key.
  // // localStorage.clear()  //for clearing local storage



  // const user = {
  //   username: 'Ankit Joshi',
  //   age: 21,
  //   city: 'ghaziabad'
  // }

  // localStorage.setItem('user', JSON.stringify(user))  // JSON.stringify used to convert object in string form because local storage stores data in the form of string.  (or we can say it converts it to readable form)

  const userData = JSON.parse(localStorage.getItem('user'));  // to retrieve data, it converts string to its original form (to object).

  console.log(userData);
    

  return (
    <div>
      
    </div>
  );
}

export default App;