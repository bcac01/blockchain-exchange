<template>
    <div class="login-page">
        <Paper class="login-page-paper">
            <h1>Exchange</h1>
            <h2>Login</h2>
            <form @submit.prevent="loginUserData($event)" class="input-container">
                <input placeholder="Email" name="email" required color="#e91e63"/>

                <input placeholder="Password" name="password" type="password" required color="#e91e63"/>
               
            <button type="submit" color="#e91e63">Login</button>
            </form>

            <span class="register-span">
                Don't have an account yet?
                <!-- TODO replace <a> with <router-link> -->
                <router-link to="/register"> Sign up free</router-link>
            </span>

        </Paper>
    </div>
</template>

<script>
import Paper from '../ui/Paper'
import {loginUser} from '../../services/auth.service'
import router from '../../router/router'

export default {
    components: {
        Paper
    },
    methods: {
        async loginUserData(event) {
            const userData = {
                Email: event.target.email.value,
                Password: event.target.password.value
            }
            const res = await loginUser(userData.Email, userData.Password)
            if (res) {
                router.push({name: 'Main'})
            }
        }
    }
}
</script>

<style scoped>
    .login-page {
        height: 100%;
        width: 100%;
        margin-top: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightseagreen;
    }
    .login-page-paper {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 30em;
        height: 34em;
        padding: 2em;
        box-sizing: border-box;
        justify-content: space-evenly;
    }
    .input-container {
        margin: 0 auto;
        /*border: 1px solid green;*/
    }
    h1, h2 {
        margin:0 auto;
        color: #e91e63;
        /*border: 1px solid red;*/
    }
    label {
        display: flex;
        /*border: 1px solid red;*/
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-top: 0.5em;
    }
    label > span {
        margin-bottom: 0.5em;
        margin-right: 0.5em;
        margin-top: 0.5em;
        width: 4em;
        font: inherit;
    }
    button {
        margin-top: 1em;
        width: 100%;
        font: inherit;
        color: #fff;
        background-color: lightseagreen;
        height: 2.5em;
        border: none;
        border-radius: 4px;
        text-transform: uppercase;
    }
    input {
        font: inherit;
        padding: 0.5em;
        width: 17em;
        font: inherit;
    }
    .register-span {
        margin-top: 1em;
        align-self: center;
    }
    a {
        color: #e91e63;
        text-decoration: none;
    }
</style>