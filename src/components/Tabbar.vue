<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/shopping">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" to="/my">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
        active: 0
        }
    }
}
</script>

<style scoped>

</style>