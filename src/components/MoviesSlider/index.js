// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieDetails} = props
  const settings = {
    slidesToShow: 4,
    dots: false,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        {movieDetails.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
