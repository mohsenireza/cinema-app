import { db } from '../../data/db';
import RoomItem from '../../components/RoomItem/RoomItem';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Choose a room</h1>
      <ul>
        {db.rooms.map((room) => (
          <RoomItem
            key={room.id}
            id={room.id}
            title={room.title}
          />
        ))}
      </ul>
    </div>
  )
}

export default HomePage;
