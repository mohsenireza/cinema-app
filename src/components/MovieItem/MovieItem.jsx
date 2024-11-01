import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MovieItem.css';

function MovieItem({ movie, roomId, isClickable = true, isListItem = true }) {

  const ContainerTag = isListItem ? 'li' : 'div';

  return (
    <ContainerTag className={`movie-item ${!isClickable ? 'movie-item--not-clickable' : ''}`}>
      <Link to={`/room/${roomId}/movie/${movie.id}`} className="movie-item__link">
        <figure className="movie-item__image-container">
          <img className="movie-item__image" src={movie.image} loading="lazy" />
        </figure>
        <h3 className="movie-item__title">{movie.title}</h3>
        <span className="movie-item__time">{movie.startsAt}</span>
      </Link>
    </ContainerTag>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    startsAt: PropTypes.string
  }).isRequired,
  roomId: PropTypes.string.isRequired,
  isClickable: PropTypes.bool,
  isListItem: PropTypes.bool,
};

export default MovieItem;
