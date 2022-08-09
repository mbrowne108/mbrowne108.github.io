import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-center mt-3'>About Me</h1>
      <div className='container border p-3 bg-light col-md-8'>  
        <p>Hello! My name is Matt Browne and I am a web developer, software engineer, and freelance classical composer living in New York, NY. My experience draws on fifteen years of music education, community outreach, collaboration, and creating music. I hold a certificate in Full Stack Web Development from the Flatiron School as well as a Doctorate in Music Composition from the University of Michigan. From my breadth of diverse experience, I bring creativity, a collaborative spirit, and rigid attention to detail to any project.</p>
      </div>
      <div className='container p-5 col-md-8'>
        <h3>Technical Skills</h3>
        <h5>JavaScript, React, Ruby on Rails, HTML, CSS, Bootstrap, SQL, Postgres, Sinatra</h5>
      </div>
    </>
  )
}

export default About