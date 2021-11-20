/**
 * Created by denishuang on 2021/11/18.
 */
import Table from './src/Table.vue'
Table.install = function (Vue) {
    Vue.component(Table.name, Table)
}

export default Table