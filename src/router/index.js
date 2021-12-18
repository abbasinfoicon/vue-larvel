import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About')
    },
    {
        path: '/team',
        name: 'Team',
        component: () =>
            import ('../views/Team')
    },
    {
        path: '/service',
        name: 'Service',
        component: () =>
            import ('../views/Service')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('../views/Contact')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ('../views/Blog')
    },
    {
        path: '/blog-details',
        name: 'BlogDetails',
        component: () =>
            import ('../views/BlogDetails')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router