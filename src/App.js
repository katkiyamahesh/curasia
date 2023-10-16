import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Service from './Service';
import Blog from './Blog';
import Contact from './Contact';
import Singlepost from './Singlepost';
import Error from './Error';

import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/service" element={<Service/>} />
      <Route  path="/blog" element={<Blog/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route path="/singlepost/:id" element={<Singlepost/>}/>
      <Route path="*" element={<Error/>}/> 
      
    </Routes>  
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
