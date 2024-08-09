// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-con">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider movieDetails={actionMovies} />
      </div>
      <div className="movies-con">
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider movieDetails={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
