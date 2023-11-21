import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { ThemeProvider } from '@mui/material'
import { theme } from './helper/theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
