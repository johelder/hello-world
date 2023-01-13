import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar';

import { Details } from './pages/Details';
import { Home } from './pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
