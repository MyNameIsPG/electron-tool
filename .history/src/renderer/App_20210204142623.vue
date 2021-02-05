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
          <el-dropdown-item>连接数据库</el-dropdown-item>
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
  right: 11px;
  top: 7px;
}
.app-warp {
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
