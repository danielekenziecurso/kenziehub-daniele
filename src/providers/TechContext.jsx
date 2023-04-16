import { createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const [usersTechs, setUsersTechs] = useState([]);
    const [modalRegister, setModalRegister] = useState(false);
    const [modalToEdit, setModalToEdit] = useState(false);
    const [techsId, setTechsId] = useState("");

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

      const deleteTechs = async (techsId) => {
        const token = JSON.parse(localStorage.getItem("@TOKEN"));
          try {
            await api.delete(`/users/techs/${techsId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const newslistTechs = usersTechs.filter(usersTechs => usersTechs.id !== techsId);
            setUsersTechs(newslistTechs);
            toast.success("Tecnologias excluida!");
            setModalToEdit(false);
          } catch (error) {
            toast.error("Ops! Algo deu errado");
          }
      };
    const changeTechs = async (data, techId) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      const newobj = {
        status: data.status,
      };
      await api.put(`/users/techs/${techId}`, newobj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const putRequest = (data) => {
        if (token) {
          api.defaults.headers.authorization = `Bearer ${token}`;
          api
            .get("profile", data)
            .then((response) => {
              setUsersTechs(response.data);
            })
            .catch((error) => console.log(error));
        }
      };
      putRequest();
      toast.success("Tecnologias atualizada com sucesso!");
      setModalToEdit(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };
    return (
        <TechContext.Provider value={{usersTechs, setTechsId, modalRegister, setModalRegister, registerTechs, modalToEdit, setModalToEdit, deleteTechs, changeTechs}}>
            {children}
        </TechContext.Provider>
    )
}