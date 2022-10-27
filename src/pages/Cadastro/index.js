import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../assets/img/logo.png"
import fundo from "../../assets/img/BACKGROUND.png"

const Signup = () => {
  const [nome, setNome] = useState("");
  const [unidade, setUnidade] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !nome | !senha | !unidade) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("Os senhas não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/home");
  };

  return (
    <C.Container style={{backgroundImage:`url(${fundo})` }}>
      <C.Content>
      <img src={img} alt="Pássaro roxo com a palavra Parrot logo abaixo" />
      <C.Label>CADASTRO</C.Label>
        <Input
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="confirme sua senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <Input
          type="number"
          placeholder="unidade/apartamento"
          value={unidade}
          onChange={(e) => [setUnidade(e.target.value), setError("")]}
        />
        <Input
          type="link"
          placeholder="link da foto"
          value={link}
          onChange={(e) => [setLink(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;