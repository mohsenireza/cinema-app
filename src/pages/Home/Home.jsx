import { db } from '../../data/db';
import RoomItem from '../../components/RoomItem/RoomItem';

function Home() {
  return (
    <div>
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

export default Home;
