import './header.css';
import { IoAccessibilitySharp } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { CgUser } from "react-icons/cg";

const Header: React.FC = () => {
 return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/logos/logoSalesforce.png" alt="Logo" className="salesforce" />
      </div>

      <div className="menu">
        <b></b>
        <a href="#">Produtos</a>
        <a href="#">Indústrias</a>
        <a href="#">Aprendizado</a>
        <a href="#">Suporte</a>
        <a href="#">Nós</a>
      </div>

      <div className="icon-container">
        <ul>
          <li><IoAccessibilitySharp size={40} /></li>
          <li><CgSearch size={40}/></li>
          <li><CgUser  size={40}/></li>
        </ul>
        <a href="https://www.example.com" className="meuBotao">Teste Grátis</a>
      </div>
      
    </header>
 );
};

export default Header;