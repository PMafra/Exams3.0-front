/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import ExampleContext from './store/ExampleContext';

export default function App() {
  const [example, setExample] = useState('');

  return (
    <ExampleContext.Provider value={{
      example, setExample,
    }}
    >
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </ExampleContext.Provider>
  );
}
