/**
 * Created by denishuang on 2021/11/20.
 */
import Actions from './src/Actions.vue'
Actions.install = function (Vue) {
    Vue.component(Actions.name, Actions)
}

export default Actions