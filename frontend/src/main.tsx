import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './auth/register.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)
