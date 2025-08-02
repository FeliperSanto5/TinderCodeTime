import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Users() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3500/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error('Erro ao carregar usuários:', err));
  }, []);

  return (
    <div className="usuarios-container">
      <header className="usuarios-header">
        <div className="menu-icon">☰</div>
        <h1 className="logo">Tinder <span>CodeTime</span></h1>
        <div className="header-actions">
          <button className="btn-creditos">ADQUIRIR CRÉDITOS</button>
          <span className="header-link">PERFIL</span>
          <span className="header-link">MENSAGENS</span>
        </div>
      </header>

      <div className="usuarios-lista">
        {usuarios.map((user) => (
          <div
            key={user._id}
            className="usuario-card"
            onClick={() => navigate(`/usuarios/${user._id}`)}
          >
            <img src={user.imagem} alt={user.nome} className="usuario-foto" />
            <div className="usuario-info">
              <strong>{user.nome}</strong>
              <p>{user.idade} - {user.cidade}, {user.pais}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;