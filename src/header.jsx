
import React from 'react';


function Header () {
  return (
    <header className="topo">
      <nav className="nav">
        <div className="titulo">
          <h1> Gerenciamento de Tarefas</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/CadastroUser"> Cadastro de Usuários </a></li>
          <li><a href="/CadastroTarefas"> Cadastro de Tarefas </a></li>
          <li><a href="/Visualizar"> Gerenciar Tarefas </a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

