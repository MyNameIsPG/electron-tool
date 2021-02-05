<template>
  <div class="container">
    <el-steps :active="2" align-center>
      <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
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