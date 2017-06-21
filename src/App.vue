<style>
@import "./assets/styles/config.scss";
.app{
  height: 100%;
}
</style>

<template>
<div class="app" id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>
