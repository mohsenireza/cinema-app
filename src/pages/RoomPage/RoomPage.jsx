import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../data/db';
import { resetScroll } from '../../utils/dom';
import MovieItem from '../../components/MovieItem/MovieItem';
import Header from '../../components/Header/Header';

function RoomPage() {
  const { roomId } = useParams();

  useEffect(() => {
    resetScroll();
  }, []);

  const room = db.rooms.find(room => room.id === roomId);

  if (!room) {
    return null;
  }

  return (
    <div>
      <Header title={room.title} />
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

export default RoomPage;
