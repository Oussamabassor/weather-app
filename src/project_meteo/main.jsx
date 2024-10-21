import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './project_meteo/App.jsx'
import './project_X_O/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
