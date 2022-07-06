import React from 'react';
import ReactDOM from 'react-dom/client';

import { Index } from './components/main/Index';
import { Classification } from './components/main/Classification';
import "./css/utils.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Classification />
    {/* <Index /> */}
  </React.StrictMode>
);