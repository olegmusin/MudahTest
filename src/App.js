import React, { Component } from 'react';
import registerIcons from './services/icons';

export default class App extends Component {
    constructor() {
        registerIcons();
    }
    render() {
        return <div />;
    }
}
