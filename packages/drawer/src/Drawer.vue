<template>
    <el-drawer v-if="drawer" v-bind="[$attrs, drawer]"  :size="size" :visible.sync="show" @closed="onDialogDone" ref="drawer">
        <component :is="drawer.component" v-bind="[drawer.context]" @done="onDialogDone"></component>
    </el-drawer>
</template>
<script>
    import {Drawer as ElDrawer} from 'element-ui'
    export default{
        name: 'XDrawer',
        data () {
            return {
                drawer: undefined,
                show: false,
                size: '30%',
            }
        },
        components: {ElDrawer},
        created (){
            this.$store.state.events.$on('opendrawer', this.onOpen)
        },
        methods: {
            onOpen (context) {
                this.drawer = undefined
                let c = context.component
                if(typeof c === 'string') {
                    import('@/views/'+c+'.vue').then( module => {
                        this.drawer = {...context, component: module.default, context: this.filterContext(context.context)}
                        this.show = true
                        this.size = context.size || '33%'
//                        console.log(this.size)
                    })
                } else{
                    this.drawer = {...context}
                }
            },
            onDialogDone () {
                this.drawer = undefined
            },
            filterContext(ctx) {
                let d = {}
                if(!ctx) {
                    return d
                }
                Object.keys(ctx).forEach(k => {
                    if (k.startsWith('$')) {
                        return
                    }
                    d[k] = ctx[k]
                })
                return d
            }
        },
        computed: {}
    }
</script>
<style>
    .el-drawer__body{
        padding: 0 1rem;
    }
</style>
