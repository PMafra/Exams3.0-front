import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainPage from './pages/MainPage';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade-drop" key={location.key}>
        <Routes location={location}>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
