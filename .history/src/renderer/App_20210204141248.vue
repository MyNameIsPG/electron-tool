<template>
  <div id="app">
    <div class="fixed-header">
      <el-button @click="linkPage('/swaggers')">swaager</el-button>
      <el-button @click="linkPage('/mysqls')">mysql</el-button>
    </div>
    <div>
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
}
</style>
