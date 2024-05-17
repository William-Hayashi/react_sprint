import React, { useEffect } from 'react'; // Certifique-se de que useEffect está sendo importado corretamente
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Sobre/Sobre'; 
import Home from './home.tsx';




const App: React.FC = () => {
    useEffect(() => {
      }, []);
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