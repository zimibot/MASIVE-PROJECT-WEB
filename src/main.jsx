import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { ThemeProvider } from '@mui/material'
import { theme } from './helper/theme'
import App from './App'
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </ThemeProvider>
)
