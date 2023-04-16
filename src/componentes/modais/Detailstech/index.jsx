import React, { useContext } from "react";
import { Modaledit } from "./styles";
import Input from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";

const Detailstech = () => {
 const {modalToEdit, setModalToEdit, changeTechs, deleteTechs} = useContext(TechContext);

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


  return (
    <Modaledit>
      <div role="dialog" className="modalEdit">
        <header>
          <h3>Tecnologia Detalhes</h3>
          <span onClick={() => setModalToEdit(!modalToEdit)}>X</span>
        </header>
        <form onSubmit={handleSubmit(changeTechs)}>
          <Input
            label="title"
            placeholder="Ex: Material UI"
            id="title"
            {...register("title")}
            error={errors.title?.message}
            type="text"
          />
          <div className="selectBox">
            <p>Selecionar status</p>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <div className="buttons" >
            <button className="change" type="submit">Salvar alterações</button>
            <button className="excluir" type="button" onClick={() => deleteTechs()}>Excluir</button>
            </div>
          </div>
        </form>
      </div>
    </Modaledit>
  );
};

export default Detailstech;
