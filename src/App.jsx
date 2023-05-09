import React from 'react';
import TopNav from './components/topnav/TopNav';
import Header from './components/header/Header'; 
import Navbar from './components/navbar/Navbar'; 
import About from './components/about/About'; 
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <TopNav/>
      <Header />
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
};

export default App; 
