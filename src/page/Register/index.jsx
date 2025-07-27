import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({
    nome: '', idade: '', cidade: '', email: '', senha: '',
    imagem: '', sexo: '', estadoCivil: '', pais: '', descricao: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await axios.post('http://localhost:3500/', form);
      setStatus('✅ Cadastro realizado com sucesso!');
      setForm({ nome: '', idade: '', cidade: '', email: '', senha: '', imagem: '', sexo: '', estadoCivil: '', pais: '', descricao: '' });
    } catch (err) {
      setStatus('❌ Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="boxone">
      <h2 className="create">Crie sua conta</h2>
      <form onSubmit={handleSubmit} className="space">
        {Object.keys(form).map((campo) => (
          <input
            key={campo}
            type="text"
            name={campo}
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
            value={form[campo]}
            onChange={handleChange}
            className="gray"
          />
        ))}
        <button
          type="submit"
          className="bg-btn"
        >
          Cadastrar-se
        </button>
      </form>
      {status && <p className="text4">{status}</p>}
    </div>
  );
}

export default Register;