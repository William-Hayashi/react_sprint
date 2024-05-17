import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Sobre/Sobre';
import Home from './home.tsx';
import FeedbackForm from '../src/feedback_form/FeedbackForm.tsx'; 
import Footer from '../src/footer/footer.tsx'; 

const App: React.FC = () => {
    useEffect(() => {
      
    }, []);

    const handleFeedbackSubmit = (nota: number, acessibilidade: boolean) => {
      console.log(`Nota: ${nota}, Acessibilidade: ${acessibilidade}`);
      // Aqui você pode enviar esses dados para o backend ou realizar outra ação
    };

    return (
      <Router>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={
            <>
              <Home />
              <FeedbackForm onSubmit={handleFeedbackSubmit} />
            </>
          } /> 
        </Routes>
        <Footer /> 
      </Router>
    );
};

export default App;