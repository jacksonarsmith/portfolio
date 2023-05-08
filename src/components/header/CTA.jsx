import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume}>Download Resume</a>
        <a href="#contact">Contact Me</a>
    </div>
  )
}

export default CTA