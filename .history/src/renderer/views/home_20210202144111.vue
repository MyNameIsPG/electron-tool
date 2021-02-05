<template>
  <div>
    <div>
      <el-button @click="linkPage('swaager')">swaager</el-button>
      <el-button @click="linkPage('mysql')">mysql</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    linkPage (path) {
      this.$rouer.push({ path })
    }
  }
}
</script>

<style>

</style>