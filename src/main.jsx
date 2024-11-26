import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CadastroUser from './CadastroUser'
import './index.css'
import CadastroTarefas from './CadastroTarefas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CadastroUser />
    <CadastroTarefas />
  </StrictMode>,
)
