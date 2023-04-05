import React, { useEffect, useState } from 'react';
import { StyledHome } from './styles';
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const HomeUser = () => {
  const navigate = useNavigate();
  const [userr, setuserr] = useState({});
  const token = localStorage.getItem("@TOKEN");

  const logout = () => {
    navigate("/");
    setuserr(localStorage.removeItem("@TOKEN", "@USERID"));
  }
  useEffect(() => {
    async function userVerification(){
      try{
        const response = await api.get("/profile", {
          headers:{
            Authorization: `Bearer ${JSON.parse(token)}`
          }
        }); 
        setuserr(response.data);
        navigate("/home");
      }
      catch(error){
        toast.error("Ops! Algo deu errado!")
      }
    }
    userVerification()
  }, [token]);


  return (
    <StyledHome>
        <header>
        <img src={logo} alt={logo} />
        <button className='buttonLogout' onClick={() => logout()}>
          Sair
        </button>
      </header>
      <div className="userInformation" > 
      <h3>Olá, {userr.name} </h3>
        <p>{userr.course_module}</p>
      </div>
      <div className="information">
        <h2>Que pena! Estamos em desenvolvimento:(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyledHome>
  )
}

export default HomeUser;