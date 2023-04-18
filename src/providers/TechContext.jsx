import { createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [usersTechs, setUsersTechs] = useState([]);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalToEdit, setModalToEdit] = useState(false);
  const [techsId, setTechsId] = useState("");
  const [techtitle, setTechTitle] = useState("");
  const navigate = useNavigate();

  const rendertech = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      setUsersTechs(data.techs);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      rendertech();
    }
  }, []);

  const registerTechs = async (data) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      rendertech();
      toast.success("Tecnologias criada com sucesso!");
      setModalRegister(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const deleteTechs = async (tech_id) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
       await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newNewsList = usersTechs.filter(techs => techs.id !== tech_id);
      setUsersTechs(newNewsList);
      setModalToEdit(false);
      toast.success("Tecnologias excluida!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };
  const changeTechs = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      const response = await api.put(`/users/techs/${techsId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsersTechs(response.data);
      toast.success("Tecnologias atualizada com sucesso!");
      setModalToEdit(false);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };
  return (
    <TechContext.Provider
      value={{
        usersTechs,
        modalRegister,
        setModalRegister,
        registerTechs,
        modalToEdit,
        setModalToEdit,
        deleteTechs,
        changeTechs,
        techsId,
        setTechsId,
        setTechTitle,
        techtitle
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
