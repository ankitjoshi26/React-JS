import React from 'react'

const card = (props) => {
    console.log(props.user);
    console.log(props.age);

  return (
    <div className="card">
      <img src = {props.img} alt = "Ankit joshi img"/>
      <h1>{props.user}</h1>
      <p>I am {props.age} years old. I am future Software Engineer, I am passionate about creating innovative solutions.</p>
      <button >View Profile</button>
    </div>
  )
}

export default card
