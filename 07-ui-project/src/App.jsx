import React from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {
  const users = [
    {
      img : 'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'DeepSkyBlue',
      tag: 'Satisfied'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1674720518057-ef8464d1568e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underserved'
    },
    {
      img : 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'DodgerBlue',
      tag: 'Underbanked'
    }
  ]
  return (
    <div >
      <Section1 users = {users}/>
      <Section2/> 
    </div>
  );
}

export default App;