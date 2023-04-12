import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledRegister } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import logo from "../../assets/img/logo.svg";
import Input from "../Input";

const RegisterForm = () => {
  const navigate = useNavigate();

  const formRegister = z.object({
    name: z.string().nonempty("Nome é obrigatório."),
    email: z
      .string()
      .nonempty("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
    confirmPassword: z
      .string()
      .nonempty("Confirmar a senha é obrigatório")
      .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"],
      }),
    bio: z.string().nonempty("Bio é obrigatória."),
    contact: z.string().nonempty("Contato é obrigatório."),
    course_module: z.string().nonempty("Modulo é obrigatório."),
  });

  const userRegistration = async (data) => {
    delete data.confirmPassword;
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegister),
  });

  return (
    <StyledRegister>
      <header>
        <img src={logo} alt={logo} />
        <button type="submit" onClick={() => navigate("/")}>
          Voltar
        </button>
      </header>
      <form onSubmit={handleSubmit(userRegistration)}>
        <div className="boxToCreate">
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <Input
          label="Name"
          placeholder="Digite aqui seu nome"
          id="name"
          {...register("name")}
          error={errors.name?.message}
          type="text"
        />
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
        <Input
          label="Senha"
          placeholder="Digite novamente sua senha"
          id="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          type="password"
        />
        <Input
          label="Bio"
          placeholder="Fale sobre você"
          id="bio"
          {...register("bio")}
          error={errors.bio?.message}
          type="password"
        />
        <Input
          label="Contato"
          placeholder="Opção de contato"
          id="contact"
          {...register("contact")}
          error={errors.contact?.message}
          type="text"
        />
        <div className="boxselect">
          <p>Selecionar módulo</p>
          <select {...register("course_module")}>
            <option value="Primeiro módulo">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </StyledRegister>
  );
};

export default RegisterForm;
