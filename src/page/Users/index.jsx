import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Users() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('https://back-end-tidercodetime.onrender.com/');
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="pagina-usuarios">
      <header className="cabecalho-usuarios">
        <div className="menu-esquerda">☰</div>
        <h1 className="titulo-logo">Tinder <span>CodeTime</span></h1>
        <div className="botoes-topo">
          <button>ADQUIRIR CRÉDITOS</button>
          <p>PERFIL</p>
          <p>MENSAGENS</p>
        </div>
      </header>

      <div className="lista-usuarios">
        {usuarios.map((usuario) => (
          <div
            key={usuario._id}
            className="usuario-card"
            onClick={() => navigate(`/usuarios/${usuario._id}`)}
          >
            <img src={usuario.img_url} alt={usuario.name} className="foto-usuario" />
            <strong>{usuario.name}</strong>
            <p>{usuario.year} - {usuario.location}, {usuario.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;