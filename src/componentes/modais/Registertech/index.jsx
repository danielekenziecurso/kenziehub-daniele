import React from "react";
import { Modalregister } from "./styles";
import Input from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

const Registertech = () => {
  const { modalRegister, setModalRegister, registerTechs } =
    useContext(TechContext);
  const modalregister = z.object({
    title: z.string().nonempty("titulo é Obrigatório."),
    status: z.string().nonempty("Status é obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(modalregister),
  });

  const submit = (data, event) => {
    event.preventDefault();
    if (data.title !== "") {
      registerTechs(data);
    }
  };

  return (
    <Modalregister>
      <div role="dialog" className="modalBox">
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <span onClick={() => setModalRegister(!modalRegister)}>X</span>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="title"
            placeholder="Ex: Typescript"
            id="title"
            {...register("title")}
            error={errors.title?.message}
            type="text"
          />
          <div className="boxselect">
            <p>Selecionar status</p>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Cadastrar Tecnologia</button>
          </div>
        </form>
      </div>
    </Modalregister>
  );
};

export default Registertech;
