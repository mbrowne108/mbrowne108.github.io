import React from 'react'
import atlas from '../Images/atlas.jpg'
import kitchen from '../Images/kitchen.jpg'
import movie from '../Images/movie.jpg'

function Portfolio() {
  return (
    <div className="row">
      <h1 className='text-center'>Portfolio</h1>
      <div className='col m-1 p-1 card'>
        <img className='card-img-top' src={atlas} alt='Atlas'/>
        <div className='card-body text-center'>
          <h5>Atlas of Curiosities</h5>
        </div>
        <div className='card-footer btn-group'>
          <a className='btn btn-primary'>Repository</a>
          <a className='btn btn-primary'>Demo</a>
        </div>
      </div>
      <div className='col m-1 p-1 card'>
        <img className='card-img-top' src={kitchen} alt='Kitchen'/>
        <div className='card-body text-center'>
          <h5>Kitchen Kingpin</h5>
        </div>
        <div className='card-footer btn-group'>
        <a className='btn btn-primary'>Repository</a>
          <a className='btn btn-primary'>Demo</a>
        </div>
      </div>
      <div className='col m-1 p-1 card'>
        <img className='card-img-top' src={movie} alt='Movie'/>
        <div className='card-body text-center'>
          <h5>Quotordle</h5>
        </div>
        <div className='card-footer btn-group'>
          <a className='btn btn-primary'>Repository</a>
          <a className='btn btn-primary'>Demo</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio