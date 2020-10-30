import Vue from 'vue'
import VueRouter from "vue-router";

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Admin from '../views/Admin.vue'
import Overview from '../components/Overview.vue'
import Products from '../components/Products.vue'
import Orders from '../components/Orders.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
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
        component: Admin,
        children: [
            {
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