import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Courses from './pages/courses';
import CourseDetail from './pages/CourseDetail';

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>

        <Route path='/courses' element = {<Courses/>}/>

        {/* dynamic routing */}
        <Route path='/courses/:id' element={<CourseDetail/>}/>

        {/* Nested Routing */}
        <Route path='/product' element = {<Product/>}>
          <Route path='men' element = {<Men/>}/>
          <Route path='women' element = {<Women/>}/>
          <Route path='kid' element = {<Kids/>}/>
        </Route>
        

        {/* if a page is not present */}
        <Route path='*' element ={<NotFound/>}/> 

      </Routes>
      <Footer/>
    </div>
  );
}
 
export default App;
