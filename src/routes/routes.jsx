import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFaundPage from '../pages/NotFauntPage';
import Register from '../pages/Register';
import Protect from '../pages/Protect';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='*' element={<NotFaundPage/>} />
       <Route element={<Protect/>}>
       <Route path='/home' element={<Home/>} />
       </Route>
    </Routes>
  )
}

export default AppRoutes;