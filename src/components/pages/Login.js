import React, {Component} from 'react'
import Paper from '../ui/Paper';
import {generatePool} from '../../services/pool.service'
import {loginUser} from '../../services/auth.service'
import './Login.css'


class Login extends Component {
    render() {
        return(
        <div className="login-page">
        <Paper>
            <h1>Exchange</h1>
            <h2>Login</h2>
            <form onSubmit={(ev) => this.loginUserData(ev)} className="input-container">
                <input placeholder="Email" name="email" required color="#e91e63"/>

                <input placeholder="Password" name="password" type="password" required color="#e91e63"/>
               
            <button type="submit" color="#e91e63">Login</button>
            </form>
            <button onClick={() => this.generatePoolAddr()}>Generate Pool</button>
            <span className="register-span">
                Don't have an account yet?
                <button onClick={() => this.props.OnGoToRegister()}> Sign up free</button>
            </span>

        </Paper>
        </div>
        )
    }

    generatePoolAddr() {
        generatePool().then(() => console.log('pool generated'))
    }

    async loginUserData(event) {
        event.preventDefault()

        const userData = {
            Email: event.target.email.value,
            Password: event.target.password.value
        }
        const res = await loginUser(userData.Email, userData.Password)
        
        if (res) {
            this.props.OnLoginSuccess(res)
        } else {
            console.log('greska', res)
        }
    }
}

export default Login