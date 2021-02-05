<template>
  <div class="container">
    <el-steps :active="2" align-center>
      <el-step title="选择表数据"></el-step>
      <el-step title="配置表字段"></el-step>
      <el-step title="生成配置项"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'mysql'
}
</script>

<style lang="sass" scoped>
.container
  position: relative;
  .setting-btn
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    &:hover
      opacity: .9;
</style>