import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from './providers/Providers';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Providers>
    <App />
    <ToastContainer
      toastStyle={{
        backgroundColor: "#343B41",
        color: "#F8F9FA",
      }}
    />
    </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
