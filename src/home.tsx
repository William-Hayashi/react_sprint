import React, { useState } from 'react';
import Header from '../src/header/header';
import Body from './body/body';
import Formulario from './formulario/formulario';
import Footer from './footer/footer';
import './home.css';

function App() {
  const [isContrastMode, setIsContrastMode] = useState(false);

  // Função para alternar o modo de contraste
  const toggleContrastMode = () => {
    setIsContrastMode(!isContrastMode);
  };

  return (
    <>
    <div className={`container ${isContrastMode? 'contrast-mode' : ''}`}>
      <Header onClick={toggleContrastMode} />
        <Body />
        <Formulario />
      </div>
      <Footer />
    </>
  );
}

export default App;