import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <ToastContainer
      toastStyle={{
        backgroundColor: "#343B41",
        color: "#F8F9FA",
      }}
    />
    </BrowserRouter>
  </React.StrictMode>,
)
