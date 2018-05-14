<template>
    <div class="sub">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
        <!-- <slot>如果没有要显示的信息，这儿会显示，否则，会显示要显示的内容！</slot> -->
        <slot>如果没有要显示的信息，这儿会显示，否则，会显示要显示的内容！</slot>
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
