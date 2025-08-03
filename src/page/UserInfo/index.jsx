import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/${id}`);
        setUsuario(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUsuario();
  }, [id]);

  if (!usuario) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="pagina-detalhes">
      <div
        className="fundo-usuario"
        style={{ backgroundImage: `url(${usuario.img_url})` }}
      >
        <span className="botao-voltar" onClick={() => navigate(-1)}>←</span>

        <div className="caixa-informacoes">
          <div className="linha-topo">
            <div>
              <strong>{usuario.name}</strong>
              <p>{usuario.year} - {usuario.location}, {usuario.country}</p>
            </div>
            <img src={usuario.img_url} alt={usuario.name} className="foto-pequena" />
          </div>

          <div className="botoes-info">
            <span className="botao rosa">Sexo: {usuario.sex}</span>
            <span className="botao vinho">País: {usuario.country}</span>
            <span className="botao preta">{usuario.marital_status}</span>
          </div>

          <p className="texto-descricao">{usuario.description}</p>

          <button className="botao-conversar">Conversar</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;