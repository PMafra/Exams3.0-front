import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Visualize from './pages/Visualize';
import Navbar from './components/Navbar';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location}>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/visualize" element={<Visualize />} />
      </Routes>
    </>
  );
}
