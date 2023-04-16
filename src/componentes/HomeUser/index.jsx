import React, { useContext} from 'react';
import { StyledHome } from './styles';
import logo from '../../assets/img/logo.svg';
import { UserContext } from '../../providers/UserContext';
import ListTechs from '../listTechs';
import { TechContext } from '../../providers/TechContext';
import Registertech from '../modais/Registertech';


const HomeUser = () => {
const {user, logout} = useContext(UserContext);
const {modalRegister, setModalRegister} = useContext(TechContext)
  return (
    <StyledHome>
        <header>
        <img src={logo} alt={logo} />
        <button className='buttonLogout' onClick={() => logout()}>
          Sair
        </button>
      </header>
      <div className="userInformation" > 
      <h3>Olá, {user.name} </h3>
        <p>{user.course_module}</p>
      </div>
      <div className="information">
      <div className='boxtechs'>
        <h2>Tecnologias</h2>
       <button type='button' onClick={() => setModalRegister(!modalRegister)}>+</button>
       {modalRegister && <Registertech/>}
       </div>
       <ListTechs/>
      </div>
    </StyledHome>
  )
}

export default HomeUser;