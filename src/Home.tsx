import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Bem-vindo à página inicial!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;
