import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="" alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small>4+ Years Programming</small>
            </article>
            <article className='about__card'>
              <h5>Experience</h5>
              <small>4+ Years Programming</small>
            </article>
            <article className='about__card'>
              <h5>Experience</h5>
              <small>4+ Years Programming</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, autem. Deleniti, sint quis eligendi eos quisquam dignissimos enim! Quos debitis eum temporibus eaque pariatur beatae autem neque, nemo consequatur unde.</p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
};

export default About;