import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import { Configurator } from '../pages';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Configurator />} />
        </Routes>
    )
}

 
