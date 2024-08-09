// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="popup-con">
      <Popup
        modal
        trigger={
          <div className="movie-item-bg">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </div>
        }
      >
        {close => (
          <div className="popup-content">
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />{' '}
            </button>
            <div className="react-player-con">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
