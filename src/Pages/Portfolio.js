import React from 'react'
import atlas from '../Images/atlas.jpg'
import kitchen from '../Images/kitchen.jpg'
import movie from '../Images/movie.jpg'

function Portfolio() {
  return (
    <>
      <div className="row">
        <h1 className='text-center mt-3'>Portfolio</h1>
        <div className='col m-1 p-1 card'>
          <img className='card-img-top' src={atlas} alt='Atlas'/>
          <div className='card-body text-center'>
            <h5>Atlas of Curiosities <button data-bs-toggle="collapse" data-bs-target="#info-atlas" className='btn btn-light'>▼</button></h5>
            <p id="info-atlas" className='collapse'>This is an app to keep track of and add new interesting local history sites anywhere in the world utilizing the Google Maps API.</p>
          </div>
          <div className='card-footer btn-group'>
            <a href="https://github.com/mbrowne108/local-history-atlas" className='btn btn-primary' target="_blank">Repository</a>
            <a href="https://atlas-of-curiosities.herokuapp.com/" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </div>
        <div className='col m-1 p-1 card'>
          <img className='card-img-top' src={kitchen} alt='Kitchen'/>
          <div className='card-body text-center'>
            <h5>Kitchen Kingpin <button data-bs-toggle="collapse" data-bs-target="#info-kitchen" className='btn btn-light'>▼</button></h5>
            <p id="info-kitchen" className='collapse'>This is an app keep track of user made recipes, ingredients in the user's pantry, and a shopping list.</p>
          </div>
          <div className='card-footer btn-group'>
            <a href="https://github.com/mbrowne108/pantry-tracker" className='btn btn-primary' target="_blank">Repository</a>
            <a href="https://pantry-tracker-app.herokuapp.com/" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </div>
        <div className='col m-1 p-1 card'>
          <img className='card-img-top' src={movie} alt='Movie'/>
          <div className='card-body text-center'>
            <h5>Quotordle <button data-bs-toggle="collapse" data-bs-target="#info-quote" className='btn btn-light'>▼</button></h5>
            <p id="info-quote" className='collapse'>This is a Wordle-like guessing game where you are given a famous movie quote and have to guess the move it is from.</p>
          </div>
          <div className='card-footer btn-group'>
            <a href="https://github.com/mbrowne108/quotordle" className='btn btn-primary' target="_blank">Repository</a>
            <a href="https://quotordle.herokuapp.com/" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </div>
      </div>
      <div className='row'>
        <br/><br/><br/><br/><br/>
      </div>
    </>
    
  )
}

export default Portfolio