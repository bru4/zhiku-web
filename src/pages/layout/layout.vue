<style lang="scss" scoped>

@import "../../assets/styles/config.scss";
.layout {
    height: 100%;
    .layout-left-and-right {
        height: 100%;
        > .left {
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
        }
        > .right {
            padding-top: $layoutPadding;
        }
    }
}

</style>

<template>

<div class="layout">
    <head-bar></head-bar>
    <el-row class="layout-left-and-right">
        <el-col :span="4" class="left">
            <left-slider></left-slider>
        </el-col>
        <el-col :offset="4" :span="20" class="right">
            <right-slider></right-slider>
        </el-col>
    </el-row>
</div>

</template>

<script>

import HeadBar from './headBar.vue'
import LeftSlider from './leftSlider.vue'
import RightSlider from './rightSlider.vue'

export default {
    name: "layout",
    components: {
        HeadBar,
        LeftSlider,
        RightSlider
    },
    data: function data() {
        return {}
    }
}

</script>
