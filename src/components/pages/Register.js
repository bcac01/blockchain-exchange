import React, {Component} from 'react'
import Paper from '../ui/Paper';
import {registerUser} from '../../services/auth.service'
import './Register.css'


class Register extends Component {
    render() {
        return(
            <div className="register-page">
            <Paper>
                <h1>Exchange</h1>
                <h2>Register</h2>
                <form onSubmit={(ev) => this.registerUserData(ev)} className="v-text-field-container">
                        <input placeholder="Email" name="email" required color="#e91e63"/>
                        <input placeholder="Password" name="password" type="password" required color="#e91e63"/>
    
                <button type="submit" color="#e91e63" dark>register</button>
                </form>
    
    
                <span className="login-span">
                    Already have an account?
                    <button onClick={() => this.props.OnBackToLogin()}> Log in </button>
                </span>
            </Paper>
            </div>
        )
    }

    async registerUserData(event) {
        event.preventDefault()

        const userData = {
            Email: event.target.email.value,
            Password: event.target.password.value
        }
        const res = await registerUser(userData.Email, userData.Password)
        
        if (res) {
            this.props.OnBackToLogin()
        }
    }
}

export default Register