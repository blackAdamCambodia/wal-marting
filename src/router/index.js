import {createRouter, createWebHistory} from 'vue-router'
const HomeView = () => import('../views/HomeView.vue');
const Login = () => import('../views/LoginView.vue');
const Register = () => import('../views/RegisterView.vue');
const PasswordReset = () => import('../views/PasswordReset.vue');
const Compare = () => import('../views/Compare.vue');
const Cart = () => import('../views/Cart.vue');
const FAQ = () => import('../views/FAQ.vue');
const ReturnPolicy = () => import('../views/Return.vue');
const AboutCompany = () => import('../views/About.vue');
const PrivacyPolicy = () => import('../views/Privacy.vue');
const Products = () => import('../views/ProductDetails.vue');
const NotFound = () => import("../views/NotFound.vue")

const  routes= [
    {path:'/',
    name: 'HomeView',
    component: HomeView,
    meta:{
        title: "Shopro | Home"
    }
    },
    {path:'/login', 
    name: 'Login',
    component: Login,
    meta:{
        title: "Shopro | Login"
    } 
    },
    {path:'/register', 
    name: 'Register',
    component: Register,
    meta:{
        title: "Shopro | Register"
    } 
    },
    {path:'/forgetpassword', 
    name: 'PasswordReset',
    component: PasswordReset,
    meta:{
        title: "Shopro | Password Reset"
    } 
    },
    {path:'/compare', 
    name: 'Compare',
    component: Compare, 
    meta:{
        title: "Shopro | Compare"
    }
    },
    {path:'/cart', 
    name: 'Cart',
    component: Cart,
    meta:{
        title: "Shopro | Cart"
    } 
    },
    {path:'/faq', 
    name: 'FAQ',
    component: FAQ,
    meta:{
        title: "Shopro | Terms"
    } 
    } ,
    {path:'/return-policy', 
    name: 'ReturnPolicy',
    component: ReturnPolicy,
    meta:{
        title: "Shopro | Return Policy"
    } 
    },
    {path:'/about-company', 
    name: 'AboutCompany',
    component: AboutCompany,
    meta:{
        title: "Shopro | About Company"
    } 
    },
    {path:'/privacy-policy', 
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta:{
        title: "Shopro | Privacy Policy"
    } 
    },
    {path:'/products/:id',  
    name: 'Products',
    component: Products,
    meta:{
        title: "Shopro | Products"
    }
    
    },
    
    {path:'/products/:id',  
    name: 'ProductDetails',
    component: () => import('../components/Product.vue'),
    meta:{
        title: `Shopro | ProductDetails | :id`
    }    
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component:NotFound
      }
]



const router = createRouter({
    history: createWebHistory(),
   routes
})
const DEFAULT_TITLE ="404 Page Not Found";
router.beforeEach((to, from, next) =>{
    document.title= to.meta.title || DEFAULT_TITLE ;
    next();
})

export default router