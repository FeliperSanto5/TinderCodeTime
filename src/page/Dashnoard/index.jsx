import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Users() {
  const usuarios = [
    {
      id: 1,
      nome: 'Ana Júlia',
      idade: 32,
      cidade: 'Ipatinga',
      estado: 'Minas Gerais',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YnoGQbjU8M0VYO3nEgy2IK6Q2Z47zMeXeQ&s'
    },
    {
      id: 2,
      nome: 'Fernanda',
      idade: 29,
      cidade: 'Campinas',
      estado: 'São Paulo',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkycav22iac2zR4ky8cc6Vv33xCrqE2pEBnpSX60tuWumecoFnvEphlshRw4qat6dEQUw&usqp=CAU'
    },
    {
      id: 3,
      nome: 'Juliana',
      idade: 27,
      cidade: 'Recife',
      estado: 'Pernambuco',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVwaEoQLhA-z9ks6lTPzPn9mTfxPsnoApxtnX3ugTrolNX_05ds_3vfAHY3IlqgTivxs&usqp=CAU'
    },
    {
      id: 4,
      nome: 'Beatriz',
      idade: 34,
      cidade: 'Curitiba',
      estado: 'Paraná',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUXXnvC_-aU7vX9fYIizE8BhrWFltLWElbhtQzmpbmCGB9smstpUm_FXBYGGbcjCK_JI&usqp=CAU'
    },
    {
      id: 5,
      nome: 'Júlia',
      idade: 29,
      cidade: 'Belo Horizonte',
      estado: 'Minas Gerais',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDilLHn5KCZApGOZhwwwwWn3hiBik_skQ1PJP7WO0TOOHYlVDhp7KlRBIU_fOykH3-mM&usqp=CAU '
    },
    {
      id: 6,
      nome: 'Mariana',
      idade: 18,
      cidade: 'São Paulo',
      estado: 'São Paulo',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTl8G5_8Jnc6RqCIfUmL-kfcIwdYTRab9w1KdLa-7qPxG8BbjUw1HVP6RHkai6jvqM5VA&'
    },
    {
      id: 7,
      nome: 'Patrícia',
      idade: 23,
      cidade: 'João Pessoa',
      estado: 'Paraíba',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROq7xFi4ReJc7tAaoxCxf5cititLARPaVfyDvs4log7FefLLggBAmm1PwUSFnsBR7SlpY&usqp=CAU'
    },
    {
      id: 8,
      nome: 'Bruna',
      idade: 26,
      cidade: 'Porto Alegre',
      estado: 'Rio Grande do Sul',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFRfSq2XbWd4ecBzTRkFYzEdi5OsChYtl2UnA3mef1g_UnnrwygLmdSM1DvkJDepohLw&usqp=CAU'
    },
    {
      id: 9,
      nome: 'Ana Paula',
      idade: 35,
      cidade: 'Goiânia',
      estado: 'Goiás',
      imagem: 'https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita-em-sueter-rosa-quente-aparencia-natural-sorridente-retrato-ligado-isolado-cabelo-comprido_285396-896.jpg'
    },
    {
      id: 10,
      nome: 'Renata',
      idade: 21,
      cidade: 'Cuiabá',
      estado: 'Mato Grosso',
      imagem: 'https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg'
    },
    {
      id: 11,
      nome: 'Leticia',
      idade: 27,
      cidade: 'Belém',
      estado: 'Pará',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9gVx2SgDU8BzfBcOl6JaERLyNDnL4coijQ&s'
    },
    {
      id: 12,
      nome: 'Camila',
      idade: 37,
      cidade: 'Aracaju',
      estado: 'Sergipe',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dSc2lhJJn0DLPPjEKUwiQQKiN4MlASrVYdUEYXDVtPD66GYn0xEfIo5mWSxCKthrKwg&usqp=CAU'
    },
    {
      id: 13,
      nome: 'Ana Maria',
      idade: 30,
      cidade: 'Salvador',
      estado: 'Bahia',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Pv5sTINKibaDkiApRo2sSBrifZ8IE-M42w&s'
    },
    {
      id: 14,
      nome: 'Fernanda',
      idade: 29,
      cidade: 'Palmas',
      estado: 'Tocantins',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfo0GwKKBxUxCTzDjl1tmx52tkBXI55-a9p07vPG7LgLeKCTon0uBfJufnBu0YARX414&usqp=CAU'
    },
        {
      id: 15,
      nome: 'Erica',
      idade: 24,
      cidade: 'Vitória',
      estado: 'Espirito Santo',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsJkdB7VT8rlXvhXMNZKzLfB4ZHvjR-REMRc9y9C3VhlU26XNV31Pkr0AJZ0RhTBUTk4&usqp=CAU'
    },
    {
      id: 16,
      nome: 'Stephanie',
      idade: 28,
      cidade: 'Florianópolis',
      estado: 'Santa Catarina',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G33KLDAR9DxQUok04v4o97hKpqu3gjJ7bn-ZS2N3RuIvV9x_AaWkYPENYd2hUzfRyf8&usqp=CAU'
    },
    {
      id: 17,
      nome: 'Selma',
      idade: 29,
      cidade: 'Natal',
      estado: 'Rio Grande do Norte',
      imagem: 'https://img.freepik.com/fotos-gratis/meados-de-tiro-mulher-sorrindo-para-a-camera_23-2148344581.jpg'
    },
    {
      id: 18,
      nome: 'Cintia',
      idade: 27,
      cidade: 'Teresina',
      estado: 'Piaui',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLa2P3p7PndKQfeLT0epKNTe1PF8FRghTiQ&s'
    },
    {
      id: 19,
      nome: 'Bianca',
      idade: 19,
      cidade: 'Manaus',
      estado: 'Amazonas',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9TpmJx6dumWzfILqQx18WmAqtKoPJrBTsQ&s'
    },
    {
      id: 20,
      nome: 'Maria Eduarda',
      idade: 23,
      cidade: 'Brasilia',
      estado: 'Distrito Federal',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDCAja1mtBuXU3KaDnSGe8ccmzfty0QfExw&s'
    },
    {
      id: 21,
      nome: 'Fabiana',
      idade: 27,
      cidade: 'Maringa',
      estado: 'Parana',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRQ5BgjDyC7ORfx4jxp63EhkQNwnrpZCd7tc61LlNXXfdX89Aj4tIGvokGe5aQMvRBEQ&usqp=CAU'
    },
  ];
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
