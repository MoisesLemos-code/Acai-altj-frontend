import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes/index';
import { ToastContainer } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
