import React from 'react';

import Home from './pages/Home/index';
import 'minireset.css';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
