import Vue from 'vue'
import Router from 'vue-router'
import spotifyIndex from '@/components/spotifyIndex'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'spotifyIndex',
        component: spotifyIndex
    }]
})