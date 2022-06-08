import React from 'react';
import ReactDOM from 'react-dom/client';
import { Side } from '../component/side/Side';
import { Main } from '../component/index/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Side />
    <Main />
  </React.StrictMode>
);
