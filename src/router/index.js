import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import About from '../pages/About.vue'
import Recruitment from '../pages/Recruitment.vue'
import Contact from '../pages/Contact.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/services', component: Services },
        { path: '/about', component: About },
        { path: '/recruitment', component: Recruitment },
        { path: '/contact', component: Contact },
    ],
})
