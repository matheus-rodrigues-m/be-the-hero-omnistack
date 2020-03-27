import React from 'react';
import { Link, useHistory } from 'react-router-dom'; //Importação do tipo Link para otimizar a migração entre de páginas
import { FiArrowLeft } from 'react-icons/fi'; //Importação do ícone Arrow Left do pacote fi

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { useState } from 'react';

export default function Register()
{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); //Função js para linkar de forma instantânea ao ser chamado.

    async function handleRegister(e){ //Criação da função de cadastro
        e.preventDefault(); // Tira o padrão de recarga e otimiza, como o Link do react-router-dom

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
            const response = await api.post('ongs', data); //Envia dados para o BD

            alert(`Seu ID de acesso: ${response.data.id}`); //Retorna o ID da ONG cadastrada para o Usuário

            history.push('/'); //Chamada do link history
        }
         catch (err){
             alert('Erro no Cadastro, tente novamente!');
         }
    }
    
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadstro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon                    
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}/>

                    <input type="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                    <input placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}/>

                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}/>
                        
                        <input placeholder="UF" style={{ width: 80}} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}