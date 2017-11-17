import Vue from 'vue';
import Router from 'vue-router';

//Pages
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import About from '@/components/About';

//Authentification
import Authentication from '@/components/Auth/Authentication';
import Login from '@/components/Auth/Login';
import Register from '@/components/Auth/Register';
import Logout from '@/components/Auth/Logout';
import Forgot from '@/components/Auth/Forgot';

//Utilisateur
import User from '@/components/User/User';
import Settings from '@/components/User/Settings';
import Dashboard from '@/components/User/Dashboard';

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'main',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/auth',
            name: 'Auth',
            component: Authentication,
            redirect: '/auth/login',
            children: [{
                    path: 'login',
                    name: 'Login',
                    component: Login,
                    meta: {
                        requiresGuest: true
                    },

                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register,
                    meta: {
                        requiresGuest: true
                    },
                },
                {
                    path: 'logout',
                    name: 'Logout',
                    component: Logout,
                    meta: {
                        requiresGuest: false
                    },
                },
                {
                    path: 'forgot',
                    name: 'Forgot',
                    component: Forgot,
                    meta: {
                        requiresGuest: true
                    },
                }
            ]
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/user',
            name: 'User',
            component: User,
            meta: {
                requireAuthenticated: true
            },
            redirect: '/user/dashboard',
            children: [{
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'settings',
                    name: 'Settings',
                    component: Settings
                },
            ]
        },
    ]
})