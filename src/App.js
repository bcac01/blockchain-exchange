import React, {Component} from 'react'
import './App.css'
import Web3 from 'web3'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Main from './components/pages/Main';

class App extends Component {
    constructor() {
        super()

        this.state = {page: 'login', user: null}
    }
    render() {

        let page
        if (this.state.page == 'login') {
            page = (<Login OnLoginSuccess={(user) => this.loginUser(user)} OnGoToRegister={() => this.goToRegister()}></Login>)
        } else if (this.state.page == 'register') {
            page = (<Register OnBackToLogin={() => this.goToLogin()}></Register>)
        } else if (this.state.page == 'main' && this.state.user != null) {
            page = (<Main user={this.state.user} OnBackToLogin={() => this.goToLogin()}></Main>)
        } else {
            page = (<span>Error</span>)
        }

        return(
            <div className="App">
                {page}
            </div>
        )
    }

    loginUser(user) {
        this.setState({page: 'main', user: user})
    }

    goToRegister() {
        this.setState({page: 'register'})
    }

    goToLogin() {
        this.setState({page: 'login'})
    }

}

export default App