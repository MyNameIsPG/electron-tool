<template>
  <div id="app">
    <ul class="fixed-header">
      <li @click="linkPage('/swaggers')">swaager</li>
      <li @click="linkPage('/mysqls')">mysql</li>
    </ul>
    <div class="setting">
      <i class="el-icon-setting"></i>
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
.app-warp {
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
