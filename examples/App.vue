<template>
    <div id="app">
        <x-table :items="items" v-model="tableData"></x-table>
        <img alt="Vue logo" src="./assets/logo.png">
    </div>
</template>

<script>
    import XTable from '../packages/table/src/Table.vue'
    export default {
        name: 'App',
        components: {
            XTable
        },
        data () {
            return {
                tableData: [{name: 'girl', age:23}, {name: 'boy', age: 101}, {name: 'child'}],
                items: ['name', {name:'age', type: 'number'}]
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
