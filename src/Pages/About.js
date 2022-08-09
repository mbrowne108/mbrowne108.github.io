import React from 'react'
import headshot from '../Images/Headshot.JPG'


function About() {
  return (
    <>
      <h1 className='m-3'>About Me</h1>
      <div className='container row border p-3 bg-light'>
        <div className='col-8'>
          <p>Hello! My name is Matt Browne and I am a web developer, software engineer, and freelance classical composer living in New York, NY. My experience draws on fifteen years of music education, community outreach, collaboration, and creating music. I hold a certificate in Full Stack Web Development from the Flatiron School as well as a Doctorate in Music Composition from the University of Michigan. From my breadth of diverse experience, I bring creativity, a collaborative spirit, and rigid attention to detail to any project.</p>
          <h3 className='pt-5'>Technical Skills</h3>
          <h5>JavaScript, React, Ruby on Rails, HTML, CSS, Bootstrap, SQL, Postgres, Sinatra</h5>
        </div>  
        <img src={headshot} className='float-end col-4 img-fluid' />
      </div>
    </>
  )
}

export default About