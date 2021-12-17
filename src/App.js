/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import FiltersContext from './store/FiltersContext';

export default function App() {
  const [filters, setFilters] = useState('');

  return (
    <FiltersContext.Provider value={{
      filters, setFilters,
    }}
    >
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </FiltersContext.Provider>
  );
}
