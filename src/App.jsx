import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Logements from './Pages/Logements/Logements'
import About from './Pages/About'
import Error from './Pages/Error'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/logements/:id" element={< Logements />} />
        <Route path="/about" element={< About /> } />
        <Route path="*" element={< Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

export default App