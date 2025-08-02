import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Users() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3500/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.log('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div className="pagina-usuarios">
      {/* Cabeçalho */}
      <header className="cabecalho-usuarios">
        <div className="menu-esquerda">☰</div>
        <h1 className="titulo-logo">Tinder <span>CodeTime</span></h1>
        <div className="botoes-topo">
          <button>ADQUIRIR CRÉDITOS</button>
          <p>PERFIL</p>
          <p>MENSAGENS</p>
        </div>
      </header>

      {/* Lista de usuários */}
      <div className="lista-usuarios">
        {usuarios.map((usuario) => (
          <div
            key={usuario._id}
            className="usuario-card"
            onClick={() => navigate(`/usuarios/${usuario._id}`)}
          >
            <img src={usuario.imagem} alt={usuario.nome} className="foto-usuario" />
            <strong>{usuario.nome}</strong>
            <p>{usuario.idade} - {usuario.cidade}, {usuario.pais}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
