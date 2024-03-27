import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx'; 
import React from 'react';

const Sobre: React.FC = () => {
 return (
    <div>
        
      <Header/>
      <h1>Membros dos Grupo</h1>
      <img src="/src/logos/foto1.png" alt="Foto1" />
      <img src="/src/logos/foto will" alt="Foto Will" />
      <img src="/src/logos/fotoAle" alt="Foto Alexandre" />
      <img src="/src/logos/decor1" alt="Foto Salesforce" />
      
      <Footer/> 
    </div>
 );
};

export default Sobre;
