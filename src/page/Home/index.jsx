function UserInfo() {
  const usuario = {
    nome: 'Ana Júlia',
    idade: 32,
    cidade: 'Ipatinga',
    pais: 'Brasil',
    sexo: 'Feminino',
    estadoCivil: 'Solteira',
    descricao: 'Adoro conversas significativas, pessoas de sorriso fácil, que curtem a vida e não sejam arrogantes e rudes.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YnoGQbjU8M0VYO3nEgy2IK6Q2Z47zMeXeQ&s'
  };

  return (
    <div className="pagina-detalhes">
      <div
        className="fundo-usuario"
        style={{ backgroundImage: `url(${usuario.imagem})` }}
      >
        <span className="botao-voltar" onClick={() => alert('Voltar')}>←</span>

        <div className="caixa-informacoes">
          <div className="linha-topo">
            <div>
              <strong>{usuario.nome}</strong>
              <p>{usuario.idade} - {usuario.cidade}, {usuario.pais}</p>
            </div>
            <img src={usuario.imagem} alt={usuario.nome} className="foto-pequena" />
          </div>

          <div className="botoes-info">
            <span className="botao rosa">Sexo: {usuario.sexo}</span>
            <span className="botao vinho">País: {usuario.pais}</span>
            <span className="botao preta">{usuario.estadoCivil}</span>
          </div>

          <p className="texto-descricao">{usuario.descricao}</p>

          <button className="botao-conversar">Conversar</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;