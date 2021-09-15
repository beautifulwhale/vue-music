<template>
    <div class="area">
        <div class="areaitem" v-for="(item, index) in area" :key="index" @click="changeArea(item)">
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        area:{
            type:Array,
            default:()=>[]
        }
    },
    methods: {
        changeArea
    },    
}
</script>
<style lang="less" scoped>

</style>