import React, {Component} from 'react'
import './App.css'
import Web3 from 'web3'
import Login from './components/pages/Login';
import Register from './components/pages/Register';

class App extends Component {
    render() {
        return(
            <div>
                <Register></Register>
                <Login></Login>
            </div>
        )
    }
}

export default App