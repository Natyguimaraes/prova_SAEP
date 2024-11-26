import './index.css'
import React from 'react';
import Header from './header';
function CadastroTarefas() {
  
    return (
        <><Header />

        <div className="cadastro-container">
            <h1>Cadastro de Tarefas</h1>
            <form>

                <div>
                    <label>Descrição:</label>
                    <input
                        type="text"
                        name="nome" />
                </div>

                <div>
                    <label>Setor:</label>
                    <input
                        type="email"
                        name="email" />
                </div>

            <div>
                <label> Usuário: </label>
                <select className="user">
                    <option>Natália</option>
                    <option>João</option>
                </select>
            </div>
            <div>
                <label> Prioridade </label>
                <select className="user">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                </select>
            </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div></>
    )
}

export default CadastroTarefas;
