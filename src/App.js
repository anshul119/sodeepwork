import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/header/Header';

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route patch="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
