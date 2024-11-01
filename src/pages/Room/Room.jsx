import { useParams } from 'react-router-dom';

import { db } from '../../data/db';
import MovieItem from '../../components/MovieItem/MovieItem';

function Room() {
  const { roomId } = useParams();

  const room = db.rooms.find(room => room.id === roomId);

  if (!room) {
    return null;
  }

  return (
    <div>
      <ul>
        {room.movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            roomId={roomId}
          />
        ))}
      </ul>
    </div>
  );
}

export default Room;
