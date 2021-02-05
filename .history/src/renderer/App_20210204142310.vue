<template>
  <div id="app">
    <ul class="fixed-header">
      <li @click="linkPage('/swaggers')">swaager</li>
      <li @click="linkPage('/mysqls')">mysql</li>
    </ul>
    <div class="setting">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="app-warp">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pg-project',
  methods: {
    linkPage (path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
  position: relative;
}
.fixed-header {
  position: fixed;
  left: 0px;
  top: 0px;
  background: #dedada;
  right: 0px;
}
.fixed-header li {
  height: 30px;
  display: inline-block;
  text-align: center;
  padding: 0 10px;
  line-height: 30px;
  margin-right: 10px;
  cursor: pointer;
}
.fixed-header li:hover {
  opacity: .9;
}
.setting {
  position: absolute;
  right: 0px;
  top: 0px;
}
.app-warp {
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
