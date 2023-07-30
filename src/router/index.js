import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const  routes= [
    {path:'/',
    name: 'HomeView',
    component: HomeView
    },
    {path:'/login', 
    name: 'Login',
    component: () => import('../views/LoginView.vue'), 
    },
    {path:'/register', 
    name: 'Register',
    component: () => import('../views/RegisterView.vue'), 
    },
    {path:'/forgetpassword', 
    name: 'PasswordReset',
    component: () => import('../views/PasswordReset.vue'), 
    },
    {path:'/compare', 
    name: 'Compare',
    component: () => import('../views/Compare.vue'), 
    },
    {path:'/terms', 
    name: 'Terms',
    component: () => import('../views/Terms.vue'), 
    } ,
    {path:'/return-policy', 
    name: 'ReturnPolicy',
    component: () => import('../views/Return.vue'), 
    },
    {path:'/support-policy', 
    name: 'SupportPolicy',
    component: () => import('../views/Support.vue'), 
    },
    {path:'/privacy-policy', 
    name: 'PrivacyPolicy',
    component: () => import('../views/Privacy.vue'), 
    }
]
const router = createRouter({
    history: createWebHistory(),
   routes
})


export default router