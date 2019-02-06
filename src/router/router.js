import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/Login'
import Register from '../components/page/Register'


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
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                title: 'Register'
            },
        }
    ]
})

export default router