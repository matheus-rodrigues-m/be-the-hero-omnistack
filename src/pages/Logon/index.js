import React, {useState} from 'react';

import './styles.css'; //Importa os dados de estilização CSS do arquivo
import { FiLogIn } from 'react-icons/fi'; //Importação do ícone LogIn do pacote fi
import { Link, useHistory } from 'react-router-dom'; //Importação do tipo Link para otimizar a migração entre de páginas

import api from '../../services/api'; //Importação da API backend

import heroesImg from '../../assets/heroes.png'; //Importando a imagem para o código JavaScript
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id); //Salva o ID inserido
            localStorage.setItem('ongName', response.data.name); //Salva o nome correspondente
            
            history.push('/profile'); //Encaminha para o profile

        } catch (err){
            alert('Falha no Login, Tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro                    
                    </Link>

                </form>

            </section>

            <img src={heroesImg} alt="Heroes"></img>

        </div> //div.logon-container (Enter)

    );
}