<style lang="scss" scoped>
.right-slider{
  padding: 10px;
}
</style>

<template>
  <div class="right-slider">
    <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
    name: "",
    data: function data() {
        return {
          key: ''
        }
    }
}

</script>
