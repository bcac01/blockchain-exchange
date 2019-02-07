<template>
    <div class="main">
        <Header @logout="logoutUserAndGoBack()"/>
        <div class="main-top-layer">
            <Exchanger :user="user" v-if="user" @submitAmount="convertAmount($event)" class="main-exchanger"/>
            <UserInfo :user="user" v-if="user" class="main-user-info"/>
        </div>
    </div>
</template>

<script>
import firebase from '../../services/fire'
import {registerUser, logoutUser} from '../../services/auth.service'
import {getUser} from '../../services/user.service'
import router from '../../router/router'
import Header from '../ui/Header'
import UserInfo from '../ui/UserInfo'
import Exchanger from '../ui/Exchanger'

export default {
    components: {
        Header,
        UserInfo,
        Exchanger
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
        },
        convertAmount(event) {
            const conversionInfo = event.conversionInfo
            console.log(conversionInfo) 
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

.main-top-layer {
    display: flex;
    flex-direction: row;
}

.main-user-info {
    width: fit-content;
}

.main-exchanger {
    flex-grow: 1;
}

</style>
