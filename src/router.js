import vueRouter from 'vue-router'
import User from './components/User'
import Data from './components/Data'
import Movimiento from './components/Movimiento'
import Registro from './components/Registro'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/historial/:username',
            name: "user_data",
            component: Data
        },
        {
            path: '/user/movimientos/:username',
            name: "user_movimiento",
            component: Movimiento
        },
        {
            path: '/user/registro/:username',
            name: "user_registro",
            component: Registro
        },  
        ]
    })
    export default router