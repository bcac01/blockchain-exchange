<template>
    <div class="main">
        <Header @logout="logoutUserAndGoBack()"/>
        <UserInfo :user="user" v-if="user" class="main-user-info"/>
    </div>
</template>

<script>
import firebase from '../../services/fire'
import {registerUser, logoutUser} from '../../services/auth.service'
import {getUser} from '../../services/user.service'
import router from '../../router/router'
import Header from '../ui/Header'
import UserInfo from '../ui/UserInfo'


export default {
    components: {
        Header,
        UserInfo
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
    background-color: lightgray;
}

.main-user-info {
    width: fit-content;
}

</style>
