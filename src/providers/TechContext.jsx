import { createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const [usersTechs, setUsersTechs] = useState([]);
    const [modalRegister, setModalRegister] = useState(false);
    const [modalToEdit, setModalToEdit] = useState(false);
    const [techsId, setTechsId] = useState("");
    const navigate = useNavigate();

    const rendertech = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        const {data} = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setUsersTechs(data.techs)
      } catch (error) {
          console.log(error)
          toast.error("Ops! Algo deu errado");
      }
    };
    useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
          rendertech();
      }
    },[]);

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
        } 
        catch (error) {
          toast.error("Ops! Algo deu errado");
        }
      };

      const deleteTechs = async (id) => {
          try {
            const token = JSON.parse(localStorage.getItem("@TOKEN"));
            const response = await api.delete(`/users/techs/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            toast.success("Tecnologias excluida!");
            setModalToEdit(false);
            return response.data
          } catch (error) {
            toast.error("Ops! Algo deu errado");
          }
      };
    const changeTechs = async (id ,data) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
     const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologias atualizada com sucesso!");
      setModalToEdit(false);
      return response.data
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };
    return (
        <TechContext.Provider value={{usersTechs, modalRegister, setModalRegister, registerTechs, modalToEdit, setModalToEdit, deleteTechs, changeTechs, techsId, setTechsId}}>
            {children}
        </TechContext.Provider>
    )
}