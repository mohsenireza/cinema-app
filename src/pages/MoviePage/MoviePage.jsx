import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../data/db';
import { resetScroll } from '../../utils/dom';
import SeatBooker from '../../components/SeatBooker/SeatBooker';
import MovieItem from '../../components/MovieItem/MovieItem';
import Header from '../../components/Header/Header';

function MoviePage() {
  const { roomId, movieId } = useParams();

  useEffect(() => {
    resetScroll();
  }, []);

  const room = db.rooms.find(room => room.id === roomId);

  if (!room) {
    return null;
  }

  const movie = room.movies.find(movie => movie.id === movieId);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <Header title="Book a seat" />
      <MovieItem
        roomId={roomId}
        movie={movie}
        isClickable={false}
        isListItem={false}
      />
      <SeatBooker />
    </div>
  );
}

export default MoviePage;
