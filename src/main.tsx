import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Configuración responsive y touch
import { setViewportHeight } from './utils/viewportUtils'

// Inicializar ajustes de viewport
setViewportHeight()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
