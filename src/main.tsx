import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx' // Ajuste o caminho se seu App.tsx estiver em outro lugar
import '../styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)