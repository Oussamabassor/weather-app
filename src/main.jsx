import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//! project0
// import App from './project0/App.jsx'
// import './project0/index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


//! project (X/O)
// import App from './project_X_O/App.jsx'
// import './project_X_O/index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

//! project (X/O)
import App from './project_meteo/App.jsx'
import './project_X_O/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
