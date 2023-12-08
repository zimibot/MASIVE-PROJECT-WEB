import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { ThemeProvider } from '@mui/material'
import { theme } from './helper/theme'
import App from './App'
import axios from "axios";

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
