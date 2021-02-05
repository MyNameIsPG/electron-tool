<template>
  <div id="app">
    <div>
      <el-button @click="linkPage('/swagger')">swaager</el-button>
      <el-button @click="linkPage('/mysqls')">mysql</el-button>
    </div>
    <router-view></router-view>
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
</style>
