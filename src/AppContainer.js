import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

class AppContainer extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        )
    }
}

export default AppContainer;