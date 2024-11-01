import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./MovieItem.css";

function MovieItem({ movie, roomId }) {
  return (
    <li className="movie-item">
      <Link to={`/room/${roomId}/movie/${movie.id}`} className="movie-item__link">
        <figure className="movie-item__image-container">
          <img className="movie-item__image" src={movie.image} loading="lazy" />
        </figure>
        <h3 className="movie-item__title">{movie.title}</h3>
        <span className="movie-item__time">{movie.startsAt}</span>
      </Link>
    </li>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    startsAt: PropTypes.string
  }),
  roomId: PropTypes.string,
};

export default MovieItem;
