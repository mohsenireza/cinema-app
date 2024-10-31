import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieItem({ movie, roomId }) {
  return (
    <li>
      <Link to={`/room/${roomId}/movie/${movie.id}`}>
        <img src={movie.image} loading="lazy" />
        <h3>{movie.title}</h3>
        <span>{movie.startsAt}</span>
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
