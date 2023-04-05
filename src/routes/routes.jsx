import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFaundPage from '../pages/NotFauntPage';
import Register from '../pages/Register';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='*' element={<NotFaundPage/>} />
    </Routes>
  )
}

export default AppRoutes;