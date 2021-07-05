import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home/home'
import Sorteio from '../components/Sorteio/index'
import './styles.css'

const Routes = (props) => {
    return (
        <div className="routes-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/sorteio" component={Sorteio}></Route>                
                </Switch>
            </BrowserRouter>
        </div>    
    );
};

export default Routes;