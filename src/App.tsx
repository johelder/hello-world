import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { Details } from './pages/Details';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details',
    element: <Details />,
  },
]);

export function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}
