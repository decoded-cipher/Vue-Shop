import Vue from 'vue'
import VueRouter from "vue-router";

import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Items from '../views/Items.vue'
import Checkout from '../views/Checkout.vue'
import Admin from '../views/Admin.vue'

import Overview from '../components/Overview.vue'
import Profile from '../components/Profile.vue'
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
            component: Details
        },
        {
            path: '/products',
            name: 'Items',
            component: Items
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
                    path: 'profile',
                    name: 'profile',
                    component: Profile
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
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: Checkout
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