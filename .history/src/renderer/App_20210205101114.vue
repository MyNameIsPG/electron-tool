<template>
  <div id="app">
    <ul class="fixed-header">
      <li @click="linkPage('/swaggers')">swaager</li>
      <li @click="linkPage('/mysqls')">mysql</li>
    </ul>
    <setting></setting>
    <div class="app-warp">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Setting from './components/Setting'
export default {
  name: 'pg-project',
  components: {
    Setting
  },
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
  z-index: 9;
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
      z-index: 9;
}
.app-warp {
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
