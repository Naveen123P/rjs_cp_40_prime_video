// Write your code here
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  console.log(actionMovies, comedyMovies)

  return (
    <div className="prime-video-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-con">
        <h1 className="movie-heading">Action Movies</h1>
      </div>
    </div>
  )
}

export default PrimeVideo
