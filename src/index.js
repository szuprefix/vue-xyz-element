/**
 * Created by denishuang on 2021/11/21.
 */
import HelloWorld from '../packages/hello-world'
import XTable from '../packages/table'
import Actions from '../packages/actions'

const components = [
    HelloWorld,
    XTable,
    Actions
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    HelloWorld,
    XTable,
    Actions
}