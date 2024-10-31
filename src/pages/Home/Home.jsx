import { db } from '../../data/db';
import RoomItem from '../../components/RoomItem/RoomItem';

function Home() {
  return (
    <ul>
      {db.rooms.map((room) => (
        <RoomItem
          key={room.id}
          id={room.id}
          title={room.title}
        />
      ))}
    </ul>
  )
}

export default Home;
