import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Logements from './pages/Logements/Logements'
import About from './pages/About'
import Error from './pages/Error/Error'
import './index.css'

// Création des routes avec React Router pour accéder aux différentes pages 

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
