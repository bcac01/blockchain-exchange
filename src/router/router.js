import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/Login'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: 'Login'
            },
        }
    ]
})

export default router