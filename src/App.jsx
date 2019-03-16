import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import registerIconsAndFonts from './services/icons';
import { ListPage, DetailsPage } from './components';

export default class App extends Component {
    constructor() {
        super();
        registerIconsAndFonts();
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/items" component={ListPage} />
                    <Route path="/items/:id" component={DetailsPage} />
                    <Redirect from="/" to="/items" />
                </Switch>
            </Router>
        );
    }
}
