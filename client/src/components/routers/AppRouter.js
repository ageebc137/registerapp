import React from 'react';
import { HashRouter as Router,
        Switch, Route} from 'react-router-dom';
import Registration from '../pages/Registration'; 
import Dashboard from '../pages/Dashboard';  
import Header from '../subcomponent/Header';     

export default function AppRouter() {
        return(
                <Router>
                       <Header />
                        <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/register" component={Registration}/>
                        </Switch>
                </Router>
        );
}