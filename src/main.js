import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        events: new Vue(),
    }
})
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'


new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
