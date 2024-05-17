import React, { useState } from 'react';
import './FeedbackForm.css';

interface FeedbackFormProps {
  onSubmit: (nota: number, acessibilidade: boolean) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [nota, setNota] = useState<number>(0);
  const [acessibilidade, setAcessibilidade] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let acessibilidadeBoolean = false;
    if (acessibilidade.trim().toLowerCase() === "sim") {
      acessibilidadeBoolean = true;
    } else if (acessibilidade.trim().toLowerCase() === "não") {
      acessibilidadeBoolean = false;
    } else {
      alert("Por favor, digite 'sim' ou 'não'.");
      return;
    }

    const apiUrl = 'http://localhost:5000/notas';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nota,
          acessibilidade: acessibilidadeBoolean,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro ao enviar os dados: ${errorData.message || response.statusText}`);
      }

      // Exibe o alerta antes de recarregar a página
      alert("Muito Obrigado!");

      onSubmit(nota, acessibilidadeBoolean);

      // Recarrega a página (opcional)
      window.location.reload();

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert(`Erro ao enviar o feedback: ${error instanceof Error? error.message : 'Erro desconhecido'}`);
    }
  };

  return (
    <div className="feedback-form-container">
      <h1>Nota de Satisfação</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="nota" className="feedback-form-label">Nota:</label>
        <input
          type="number"
          id="nota"
          min="0"
          max="5"
          value={nota}
          onChange={(e) => setNota(Number(e.target.value))}
          className="feedback-form-input"
        />
        <br />
        <label htmlFor="acessibilidade" className="feedback-form-label">
          Utilizou acessibilidade?
        </label>
        <input
          type="text"
          id="acessibilidade"
          placeholder="Digite 'sim' ou 'não'"
          value={acessibilidade}
          onChange={(e) => setAcessibilidade(e.target.value)}
          className="feedback-form-text"
        />
        <br />
        <button type="submit" className="feedback-form-button">Enviar Avaliação</button>
      </form>
    </div>
  );
};

export default FeedbackForm;