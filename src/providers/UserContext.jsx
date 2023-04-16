import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);

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

  const token = localStorage.getItem("@TOKEN");
  useEffect(() => {
    if (token) {
      async function userVerification() {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          });
          setuser(response.data);
          navigate("/home");
        } catch (error) {
          toast.error("Ops! Algo deu errado!");
          setuser(localStorage.removeItem("@TOKEN"));
          setuser(localStorage.removeItem("@USERID"));
        }
      }
      userVerification();
    }
  }, [token]);

  const logout = () => {
    navigate("/");
    setuser(localStorage.removeItem("@TOKEN"));
    setuser(localStorage.removeItem("@USERID"));
  };
  return (
    <UserContext.Provider
      value={{ navigate, userRegistration, userLogin, user, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
