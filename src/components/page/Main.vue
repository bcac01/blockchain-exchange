<template>
    <div class="main">
        <Header @logout="logoutUserAndGoBack()"/>
        {{user}}
    </div>
</template>

<script>
import firebase from '../../services/fire'
import {registerUser, logoutUser} from '../../services/auth.service'
import {getUser} from '../../services/user.service'
import router from '../../router/router'
import Header from '../ui/Header'


export default {
    components: {
        Header
    },
    data() {
        return {
            user: null
        }
    },
    methods: {
        logoutUserAndGoBack() {
            logoutUser()
            router.push({name: 'Login'})

        }
    },
    async created() {
        const currentUser = firebase.auth().currentUser
        if (currentUser) {
            this.user = await getUser(currentUser.uid)
        } else {
            router.push({name: 'Login'})
        }
    }
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    height: 100%;
}

</style>
