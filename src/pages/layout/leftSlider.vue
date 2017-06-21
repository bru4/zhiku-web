<style lang="scss" scoped>
@import '../../assets/styles/config.scss';
.el-menu{
  border-radius: 0;
  height: 100%;
  padding-top: 60px;
}
</style>

<template>

<el-menu default-active="1" class="left-slider" id="leftSlider" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1"><i class="fa fa-tachometer"></i>控制面板</el-menu-item>

    <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="3"><i class="el-icon-menu"></i>导航二</el-menu-item>
</el-menu>

</template>

<script>

export default {
    name: "leftSlider",
    data: function data() {
        return {

        }
    },
    methods: {
        handleOpen: function(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose: function(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}

</script>
