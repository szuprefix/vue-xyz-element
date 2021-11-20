/**
 * Created by denishuang on 2021/11/18.
 */
import HelloWord from './src/HelloWorld.vue'
HelloWord.install = function (Vue) {
    Vue.component(HelloWord.name, HelloWord)
}

export default HelloWord