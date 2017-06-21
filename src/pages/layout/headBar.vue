<style lang="scss" scoped>
.el-menu{
  border-radius: 0;
  position: fixed;
  width: 100%;
  z-index: 99;
}
</style>

<template>
  <el-menu theme="dark" id="headBar" :default-active="activeIndex" class="head-bar" mode="horizontal" @select="handleSelect">
      <el-submenu index="2" class="pull-right">
          <template slot="title">欢迎您：xxoo</template>
          <el-menu-item index="2-1">个人设置</el-menu-item>
          <el-menu-item index="2-2">注销</el-menu-item>
      </el-submenu>
  </el-menu>
</template>

<script>

export default {
    name: "headBar",
    data: function data() {
        return {
            activeIndex: '2',
        }
    },

    methods: {
        handleSelect: function(key, keyPath) {
            console.log(key, keyPath);
        }

    }
}

</script>
