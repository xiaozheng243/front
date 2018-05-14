<template>
    <div class="home">
        <HeaderVue />
        <router-view name="mainheader"></router-view>
        <router-view name="mainbody"></router-view>
        <router-view name="mainfooter"></router-view>
        <FooterVue />
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
