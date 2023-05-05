import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ActionComBlk from './fonts/ActionComBlk.ttf';
import ActionComLine from './fonts/ActionComLine.ttf';
import Comic from './fonts/Comic.ttf';
import Grinch from './fonts/Grinch.otf';
import Porky from './fonts/porky.ttf';
import Porky2 from './fonts/porky2.ttf';
import Darling from './fonts/Darling.ttf';
import Exp from './fonts/Exp.otf';
import Corp from './fonts/Corp.ttf';
import Wavemax from './fonts/Wavemax.ttf';
import Bad from './fonts/Bad.ttf';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
