import { Link } from 'react-router-dom';

import { db } from '../../data/db';

function Home() {
  return (
    <ul>
      {db.rooms.map((room) => (
        <li key={room.id}>
          <Link to={`/room/${room.id}`}>
            <h3>{room.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home;
