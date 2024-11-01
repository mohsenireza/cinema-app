import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import Home from '../../pages/Home/Home';
import Room from '../../pages/Room/Room';
import Movie from '../../pages/Movie/Movie';
import Layout from "../Layout/Layout";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="room/:roomId" element={<Room />} />
        <Route path="room/:roomId/movie/:movieId" element={<Movie />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default Router;
