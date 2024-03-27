import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx'; 
import React from 'react';
import './Sobre.css'
const Sobre: React.FC = () => {
 return (
    <div>
        
      <Header/>
      <div className='imagens-container'>
      <h1 className='Title'>Membros dos Grupo</h1>
      <img src="/src/logos/foto1.jpg" alt="Foto1" className='Deycky' />
      <img src="/src/logos/fotoWill.jpg" alt="Foto Will" className='Will' />
      <img src="/src/logos/fotoAle.jpg" alt="Foto Alexandre" className='Ale' />
      </div>
      
      <img src="/src/logos/decor1.webp" alt="Foto Salesforce" className='Decor' />
      
      <Footer/> 
    </div>
 );
};

export default Sobre;
