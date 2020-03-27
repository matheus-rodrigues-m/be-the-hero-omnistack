import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    const ongId = localStorage.getItem('ongId'); //Id importado do Logon
    const ongName = localStorage.getItem('ongName'); //Nome importado do Logon

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId, //Preenche o header do server com o ID solicitado, assim como fazemos no Insomnia, mas de forma automática

            }
        }).then(response => {
            setIncidents(response.data);
        }) //Pega todos os dados da rota profile do back
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id)); //Filtra para deletar em tempo real
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/'); //Manda de volta para a raiz.
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>))}

            </ul>
        </div>
    );
}