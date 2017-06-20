<style>
@import "./assets/styles/config.scss";

</style>

<template>
  <div class="app" id="app">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="" @close="">
            <el-submenu index="1">
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
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</div>

</template>

<script>

export default {
    name: 'app'
}

</script>
