import React from 'react'; //Importando o React

export default function Header({children}){ //Desestruturou e pegou apenas a propriedade children 
    return( //Aqui dentro estará o código HTML que será retornado
        <header>
            <h1>{children}</h1> 
        </header> //Aqui, após a desestruturação, receberá o cildren (tudo dentro do header no 'App.js')
    ); 
} 