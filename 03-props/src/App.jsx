import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user = 'Ankit Joshi' age = {21} img = "./src/assets/ankit.jpg" />
      <Card user = 'Rahul Gupta' age = {22} img = "./src/assets/rahul.jpg" />
      
    </div>
  )
}
export default App
