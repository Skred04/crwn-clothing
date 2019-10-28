import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndUp from "./pages/sign-in-up/sign-in-up";


function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInAndUp}/>
        </Switch>
    </div>
  );
}

export default App;
