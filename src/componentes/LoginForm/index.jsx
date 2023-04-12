import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "./styles";
import { toast } from "react-toastify";
import logo from "../../assets/img/logo.svg";
import Input from "../Input";
import { api } from "../../services/api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({})

  const formLogin = z.object({
    email: z
      .string().nonempty("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
  });
  const userLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setuser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user));
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLogin),
  });
  return (
    <StyledLogin>
      <header>
        <img src={logo} alt={logo} />
      </header>
      <form onSubmit={handleSubmit(userLogin)}>
        <div className="boxLogin">
          <h3>Login</h3>
        </div>
        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          id="email"
          {...register("email")}
          error={errors.email?.message}
          type="text"
        />
        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          id="password"
          {...register("password")}
          error={errors.password?.message}
          type="password"
        />
        <button type="submit">Entrar</button>
        <p className="parag">Ainda não possui uma conta?</p>
        <button onClick={navigate("/register")}>Cadastre-se</button>
      </form>
    </StyledLogin>
  );
};

export default LoginForm;
