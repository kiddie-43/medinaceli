import React from 'react';
import logo from './logo.svg';
import { Buttons } from './componets/buttons/button';
import { Header } from './componets/navBar/header';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/routes';
import { BotomHeader } from './componets/bottomNavBar/bottomNavBar';
import { AppStyle } from './appStyle.jss';


export const App = () => {
  const style = AppStyle();


  return (


    <div className={style.appContainer}>
      <Header />
      <div className={style.main}>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </div>

      <Buttons disabled={false}
        onClick={() => {
        }} label={'boton'}></Buttons>
      <BotomHeader />
    </div>
  );
}


