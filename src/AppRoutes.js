import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Filters from './pages/Filters';
import Navbar from './components/Navbar';
import Exams from './pages/Exams';
import Send from './pages/Send';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location}>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/visualize" element={<Filters />} />
        <Route exact path="/visualize/exams" element={<Exams />} />
        <Route exact path="/send" element={<Send />} />
      </Routes>
    </>
  );
}
