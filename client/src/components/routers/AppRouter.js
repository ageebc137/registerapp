import React from 'react';
import { HashRouter as Router,
        Switch, Route} from 'react-router-dom';
import Registration from '../pages/Registration'; 
import Dashboard from '../pages/Dashboard';    
import Confirmation from '../pages/Confirmation';

export default function AppRouter() {
        return(
                <Router>
                        <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/register" component={Registration}/>
                                <Route path="/confirmation" component={Confirmation} />
                        </Switch>
                </Router>
        );
}