import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { StyledLogin } from "./styles";
import logo from "../../assets/img/logo.svg";
import Input from "../Input";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const LoginForm = () => {
  const { userLogin, navigate } = useContext(UserContext);

  const formLogin = z.object({
    email: z
      .string()
      .nonempty("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLogin),
  });
  const handleregister = () => {
    navigate("/register");
  };
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
        <button type="submit" onClick={handleregister}>
          Cadastre-se
        </button>
      </form>
    </StyledLogin>
  );
};
export default LoginForm;
