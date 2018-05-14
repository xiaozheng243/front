<template>
    <div>
        <!-- <HeaderVue></HeaderVue> -->
        <div class="header">
            <router-link to="/">首页</router-link>
            <router-link :to="{name:'music'}">音乐</router-link>
            <hr>
        </div>
        <router-view></router-view>
        <!-- <FooterVue></FooterVue> -->
        <div class="footer">
            <hr> 这是footer
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>

</style>
