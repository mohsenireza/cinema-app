import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import RoomPage from '../../pages/RoomPage/RoomPage';
import MoviePage from '../../pages/MoviePage/MoviePage';
import Layout from '../Layout/Layout';

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="room/:roomId" element={<RoomPage />} />
        <Route path="room/:roomId/movie/:movieId" element={<MoviePage />} />
        <Route path="*" element={() => null} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default Router;
