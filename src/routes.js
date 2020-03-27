import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //Importando configurações de rota

import Logon from './pages/Logon'; //Importando rota de Logon
import Register from './pages/Register'; //Importando a rota de Registro
import Profile from './pages/Profile'; //Importando rota de Casos de um perfil cadastrado
import NewIncident from './pages/NewIncident'; //Importando rota de Cadastro de Novo Incidente


export default function Routes()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}