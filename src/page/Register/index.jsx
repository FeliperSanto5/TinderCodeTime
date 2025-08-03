import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    idade: "",
    cidade: "",
    email: "",
    senha: "",
    imagem: "",
    sexo: "",
    estadoCivil: "",
    pais: "",
    descricao: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      // Envia para o back-end no formato que o Mongo espera
      await axios.post("http://localhost:3500/", {
        name: form.nome,
        year: form.idade,
        location: form.cidade,
        country: form.pais,
        sex: form.sexo,
        marital_status: form.estadoCivil,
        description: form.descricao,
        img_url: form.imagem,
        // email e senha -> pode adicionar no schema se quiser salvar
      });

      setStatus("✅ Cadastro realizado com sucesso!");

      // Limpa o formulário
      setForm({
        nome: "",
        idade: "",
        cidade: "",
        email: "",
        senha: "",
        imagem: "",
        sexo: "",
        estadoCivil: "",
        pais: "",
        descricao: "",
      });

      // Redireciona para dashboard após 1 segundo
      setTimeout(() => {
        navigate("/usuarios");
      }, 1000);

    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      setStatus("❌ Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="boxone">
      <form onSubmit={handleSubmit} className="space">
      <h2 className="create">Crie sua conta</h2>
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

        <button type="submit" className="bg-btn">
          Cadastrar-se
        </button>
      </form>
      {status && <p className="text4">{status}</p>}
    </div>
  );
}

export default Register;