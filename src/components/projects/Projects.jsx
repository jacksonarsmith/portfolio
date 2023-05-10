import React from 'react';
import './projects.css';

const data = [
  {
    id: 1,
    image: '',
    title: '',
    github: 'https://github.com',
    demo: ''
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Projects</h5>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <a href={github} className='btn' target='_blank'>Source Code</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
            )
          })
        }
      </div>
    </section>
  )
};

export default Projects;