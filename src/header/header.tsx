import React, { useState } from 'react';
import './header.css';
import { CgUser } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { BiSolidAdjust } from "react-icons/bi";

interface HeaderProps {
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
    onClick?.();
  };

  return (
    <header className={`header ${isIconClicked? 'clicked-icon' : ''}`}>
      <div className="logo-container">
        <img src="/src/logos/logoSalesforce.png" alt="Logo" className="salesforce" />
      </div>

      <div className="menu">
        <a href="#">Produtos</a>
        <a href="#">Indústrias</a>
        <a href="#">Aprendizado</a>
        <a href="#">Suporte</a>
        <Link to="/sobre">Nós</Link>
      </div>

      <div className="icon-container">
        <ul>
          <li><button className= "contraste"onClick={handleIconClick}><BiSolidAdjust  fill="#000000" size={40} /></button></li>
          <li><CgUser size={40}/></li>
        </ul>
        <a href="https://www.example.com" className="meuBotao">Teste Grátis</a>
      </div>
    </header>
  );
};

export default Header;