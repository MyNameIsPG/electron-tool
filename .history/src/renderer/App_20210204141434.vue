<template>
  <div id="app">
    <ul class="fixed-header">
      <li @click="linkPage('/swaggers')">swaager</li>
      <li @click="linkPage('/mysqls')">mysql</li>
    </ul>
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
.fixed-header li {
  height: 30px;
  display: inline-block;;
}
</style>
