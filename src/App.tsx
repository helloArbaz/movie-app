import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import MovieApp from './pages/MovieApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="" element={<AppLayout />}>
          <Route  path="" element={<MovieApp/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
