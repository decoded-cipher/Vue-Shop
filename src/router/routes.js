import Vue from 'vue'
import VueRouter from "vue-router";

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Admin from '../views/Admin.vue'
import Overview from '../components/Overview.vue'
import Products from '../components/Products.vue'
import Orders from '../components/Orders.vue'

import {fb} from '../firebase'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/admin',
            name: 'Admin',
            meta: {
                requiresAuth: true
            },
            component: Admin,
            children: [{
                    path: 'overview',
                    name: 'Overview',
                    component: Overview
                },
                {
                    path: 'products',
                    name: 'Products',
                    component: Products
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders
                }
            ]
        }
    ],
    mode: 'history'
})
 
router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    var currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})
export default router;