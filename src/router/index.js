import {createRouter, createWebHistory} from 'vue-router'
const HomeView = () => import('../views/HomeView.vue');
const Login = () => import('../views/LoginView.vue');
const Register = () => import('../views/RegisterView.vue');
const PasswordReset = () => import('../views/PasswordReset.vue');
const Compare = () => import('../views/Compare.vue');
const Cart = () => import('../views/Cart.vue');
const Terms = () => import('../views/Terms.vue');
const ReturnPolicy = () => import('../views/Return.vue');
const SupportPolicy = () => import('../views/Support.vue');
const PrivacyPolicy = () => import('../views/Privacy.vue');
const Products = () => import('../views/ProductDetails.vue');

const  routes= [
    {path:'/',
    name: 'HomeView',
    component: HomeView
    },
    {path:'/login', 
    name: 'Login',
    component: Login, 
    },
    {path:'/register', 
    name: 'Register',
    component: Register, 
    },
    {path:'/forgetpassword', 
    name: 'PasswordReset',
    component: PasswordReset, 
    },
    {path:'/compare', 
    name: 'Compare',
    component: Compare, 
    },
    {path:'/cart', 
    name: 'Cart',
    component: Cart, 
    },
    {path:'/terms', 
    name: 'Terms',
    component: Terms, 
    } ,
    {path:'/return-policy', 
    name: 'ReturnPolicy',
    component: ReturnPolicy, 
    },
    {path:'/support-policy', 
    name: 'SupportPolicy',
    component: SupportPolicy, 
    },
    {path:'/privacy-policy', 
    name: 'PrivacyPolicy',
    component: PrivacyPolicy, 
    },
    {path:'/products/:id',  
    name: 'Products',
    component: Products,
    
    },
    
    {path:'/products/:id',  
    name: 'ProductDetails',
    component: () => import('../components/Product.vue'),
    
    }
]
const router = createRouter({
    history: createWebHistory(),
   routes
})


export default router