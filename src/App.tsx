
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sobre from './Sobre/Sobre'; 
import Home from './home.tsx'; 

const App: React.FC = () => {
    return (
        <Router>
            
            <Routes>
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/" element={<Home />} /> 
            </Routes>
        </Router>
    );
};

export default App;