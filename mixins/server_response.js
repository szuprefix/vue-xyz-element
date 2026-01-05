/**
 * Created by denishuang on 2017/7/27.
 */


export default  {
    data (){
        return {
            loadingText: ''
        }
    },
    computed: {
        isLoading() {
            return this.loadingText > ''
        }
    },
    methods: {
        alertError(error){
            this.$message({
                message: `${error.code}错误:${error.msg}`, type: 'error'
            })

        },
        onServerResponseError: function (error) {
            this.loadingText = ''
            if (error == 'cancel') {  // confirm dialog cancel ?
                return
            }
            if ([404, 403, 405, 406, 429, 537].includes(error.code) && error.msg.detail) {
                error.msg = error.msg.detail
            }
            console.error(error)
            if (error.code === 400) {
                // this.errors = this.formErrors = joinErrors(error.msg)
            } else if (error.code === 401) {
                this.$store.state.bus.$emit('user-logout')
            } else if (error.code === 502) {
                this.alertError('网关错误')
            } else if (error instanceof Error) {
                this.alertError({code: error.name, msg: error.message})
            } else {
                this.alertError(error)
            }
            return error
        },
    }
}
