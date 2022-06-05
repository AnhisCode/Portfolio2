import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';

export const RouteSetUp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
