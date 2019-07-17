import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Usuario from '@/components/usuario/Usuario'
import Menu from '@/components/template/Menu'
import MenuAlt from '@/components/template/MenuAlt'
import UsuarioLista from '@/components/usuario/UsuarioLista'
import UsuarioEditar from '@/components/usuario/UsuarioEditar'
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        name: 'inicio',
        path: '/',
        components: {
            default: Inicio,
            menu: Menu
        },
    }, {
        path: '/usuario',
        components: {
            default: Usuario,
            menu: Menu,
            menuInferior: MenuAlt,
        },
        props: true,
        children: [{
            path: '',
            component: UsuarioLista
        }, {
            path: ':id',
            component: UsuarioDetalhe,
            props: true
        }, {
            path: ':id/editar',
            component: UsuarioEditar,
            props: true,
            name: 'editarUsuario'
        }, ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }]
})