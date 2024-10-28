import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Router } from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Router /> */}
    <App/>
  </StrictMode>,
)
