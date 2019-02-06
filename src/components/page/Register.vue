<template>
    <div class="register-page">
        <Paper class="register-page-paper">
            <h1>Exchange</h1>
            <h2>Register</h2>
            <form @submit.prevent="registerUserData($event)" class="v-text-field-container">
                    <input placeholder="Email" name="email" required color="#e91e63"/>
                    <input placeholder="Password" name="password" type="password" required color="#e91e63"/>

            <button type="submit" color="#e91e63" dark>register</button>
            </form>


            <span class="login-span">
                Already have an account?
                <router-link to="/login"> Log in </router-link>
            </span>
        </Paper>
    </div>
</template>

<script>
import Paper from '../ui/Paper'
import {registerUser} from '../../services/auth.service'
import router from '../../router/router'

export default {
    components: {
        Paper
    },
    methods: {
        async registerUserData(event) {
            const userData = {
                Email: event.target.email.value,
                Password: event.target.password.value
            }
            const res = await registerUser(userData.Email, userData.Password)
            if (res) {
                router.push({name: 'Login'})
            }
        }
    }
}
</script>

<style scoped>
    .register-page {
        height: 100%;
        width: 100%;
        margin-top: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightseagreen;
    }
    .register-page-paper {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 30em;
        height: 40em;
        padding: 2em;
        box-sizing: border-box;
        justify-content: space-evenly;
    }
    .v-text-field-container {
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
        font: inherit;
        color: #fff;
        background-color: lightseagreen;
        height: 2.5em;
        border: none;
        border-radius: 4px;
        width: 100%;
        text-transform: uppercase;
    }
    v-text-field {
        font: inherit;
        padding: 0.5em;
        width: 17em;
        font: inherit;
    }
    .login-span {
        margin-top: 1em;
        align-self: center;
    }
    a {
        color: #e91e63;
        text-decoration: none;
    }
</style>