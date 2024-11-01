import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './RoomItem.css';

function RoomItem({ id, title }) {
  return (
    <li className="room-item">
      <Link to={`/room/${id}`} className="room-item__link">
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

RoomItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default RoomItem;
