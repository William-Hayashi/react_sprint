import React from 'react';
import './body.css';


const Body: React.FC = () => {
 return (
    <>
    <div className="body-container">
      <h1 className='title'>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</h1>
      <h3>Com o Sales Cloud Professional Edition, você tem acesso a:</h3>
      <ul className='list'>
        <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
        <li>Processos, relatórios e dashboards pré-configurados;</li>
        <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
        <li>Guias e outros materiais sobre boas práticas de vendas;</li>
        <li><i><b>Onboarding</b></i> integrado, treinamentos e webinars online;</li>
        <li>Configuração de pontuação e roteamento de leads;</li>
        <li>Ferramentas para automação de tarefas recorrentes</li>
        <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
      </ul>  
      <p><b>Dúvidas?</b> Entre em contato e fale com um de nossos especialistas: 0800 891 1887.</p>  
        <img src="/src/logos/dashboard.png" alt="Foto de um dashboard" />
      </div>
    </>  
 );
};


export default Body;