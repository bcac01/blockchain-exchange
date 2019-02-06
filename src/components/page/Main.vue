<template>
    <div class="main">
        {{user}}
    </div>
</template>

<script>
import firebase from '../../services/fire'
import {registerUser} from '../../services/auth.service'
import {getUser} from '../../services/user.service'
import router from '../../router/router'


export default {
    data() {
        return {
            user: null
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

</style>
