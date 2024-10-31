import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RoomItem({ id, title }) {
  return (
    <li>
      <Link to={`/room/${id}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

RoomItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};

export default RoomItem;
