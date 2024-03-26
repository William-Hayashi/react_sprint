
import './formulario.css';
import React, { useState } from 'react';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [tamanhoEmpresa, setTamanhoEmpresa] = useState('');
    const [pais, setPais] = useState('');
    const [idioma, setIdioma] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [agree, setAgree] = useState(false);

    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
       
        if (!agree) {
            alert('Você precisa concordar com os termos para prosseguir.');
            return; 
        }
    
        alert('Cadastro concluído!');

        
        setNome('');
        setEmail('');
        setCargo('');
        setTelefone('');
        setEmpresa('');
        setTamanhoEmpresa('');
        setPais('');
        setIdioma('');
        setSobrenome('');
        setAgree(false);
    };

    return (
        <div className="container-forms">
            <h2>Inscreva-se para uma Avaliação Gratuita</h2>
            <p className="subtitle">Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label><br />
                <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                <label htmlFor="email">Email corporativo:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor="cargo">Cargo:</label><br />
                <input type="text" id="cargo" name="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} /><br />
                <label htmlFor="telefone">Telefone:</label><br />
                <input type="tel" id="telefone" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} /><br />
                <label htmlFor="empresa">Empresa:</label><br />
                <input type="text" id="empresa" name="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} /><br />
                <label htmlFor="tamanho_empresa">Tamanho da empresa:</label><br />
                <input type="text" id="tamanho_empresa" name="tamanho_empresa" value={tamanhoEmpresa} onChange={(e) => setTamanhoEmpresa(e.target.value)} /><br />
                <label htmlFor="pais">País/Região:</label><br />
                <input type="text" id="pais" name="pais" value={pais} onChange={(e) => setPais(e.target.value)} /><br />
                <label htmlFor="idioma">Idioma:</label><br />
                <input type="text" id="idioma" name="idioma" value={idioma} onChange={(e) => setIdioma(e.target.value)} /><br />
                <label htmlFor="sobrenome">Sobrenome:</label><br />
                <input type="text" id="sobrenome" name="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} /><br />
                <label htmlFor="agree">
                    Eu concordo com o    
                    <a href="/main_services_agreement" target="_blank" rel="noopener noreferrer"> Main Services Agreement</a>
                </label>
                <input type="checkbox" id="agree" name="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} /><br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
    };

export default Formulario;
