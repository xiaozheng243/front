<template>
    <div>
        <router-link :to="{name:'oumei'}">欧美</router-link>
        <router-link :to="{name:'guochan'}">华语</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data() {return {}}
};
</script>
<style>

</style>
