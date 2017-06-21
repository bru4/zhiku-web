<style lang="scss" scoped>
</style>

<template>
  <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
  </transition>
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
