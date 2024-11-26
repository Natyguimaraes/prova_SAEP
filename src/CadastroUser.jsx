import './index.css'
import React from 'react';
import Header from './header';
function CadastroUser() {
  
    return (
        <><Header />

        <div className="cadastro-container">
            <h1>Cadastro de Usuário</h1>
            <form>

                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome" />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email" />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div></>
    )
}

export default CadastroUser;
