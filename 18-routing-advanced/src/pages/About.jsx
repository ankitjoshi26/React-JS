import React from 'react';
import {useNavigate} from 'react-router-dom'

const About = () => {

  const navigate = useNavigate("")  // use to redirect from anywhere to anywhere. like here (about page to home page).

  // const btnClicked = () => {
  //   navigate('/');
  // }

  return (
    <div>
      <button
       onClick={() => {
        navigate('/');
       }}
        className='bg-emerald-400 px-5 py-3 rounded m-2 cursor-pointer active:scale-95'>
          Return to home page
      </button>

      <button
       onClick={() => {
        navigate(-1);
       }}
        className='bg-emerald-400 px-5 py-3 rounded m-2 cursor-pointer active:scale-95'>
          Back page
      </button>

      <h1>About Page</h1>
    </div>
  );
}

export default About;
