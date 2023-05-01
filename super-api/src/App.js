import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { ReactDOM } from "react-dom";
import Filters from './Filters.jsx'
import { useHistory } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Filters />
    </div>
  );
}

export default App;
