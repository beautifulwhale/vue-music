<template>
    <div>
        
    </div>
</template>
<script>
import {getRadioDetail} from '../../network/radio'
export default {
    data() {
        return {
            radioId:0,
            radioDetail:{},
        }
    },
    created(){
        this.radioId = this.$route.query.id
        this.getRadioDetail(this.radioId);
    },
    methods: {
        async getRadioDetail(id){
            const res = await getRadioDetail(id);
            console.log(res)
        }
    },
}
</script>
<style lang="less" scoped>

</style>