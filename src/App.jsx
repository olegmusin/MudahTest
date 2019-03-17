import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import registerCustomStyling from './services/styles';
import { ListPage, DetailsPage, Header } from './components';

export default class App extends Component {
    constructor() {
        super();
        registerCustomStyling();
    }

    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/items" component={ListPage} />
                        <Route
                            exact
                            path="/items/:id"
                            component={DetailsPage}
                        />
                        <Redirect from="/" to="/items" />
                    </Switch>
                </Router>
            </div>
        );
    }
}
