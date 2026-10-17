import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/',
        component: () => import('../components/AppLayout.vue'),
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/HomeView.vue')
            },
            {
                path: 'foods',
                name: 'foods',
                component: () => import('../views/FoodView.vue')
            },
            {
                path: 'recipes',
                name: 'recipes',
                component: () => import('../views/RecipeView.vue')
            },
            {
                path: 'shopping',
                name: 'shopping',
                component: () => import('../views/ShoppingView.vue')
            },
            {
                path: 'admin/users',
                name: 'user-manage',
                component: () => import('../views/UserManageView.vue'),
                meta: {
                    requiresAdmin: true
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if (to.path !== '/login' && !token) {
        return '/login'
    }

    if (to.meta.requiresAdmin && role !== 'ADMIN') {
        return '/home'
    }
})

export default router