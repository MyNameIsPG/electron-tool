<template>
  <div class="container">
    <el-steps :active="1" align-center>
      <el-step title="选择表数据"></el-step>
      <el-step title="配置表字段"></el-step>
      <el-step title="生成配置项"></el-step>
    </el-steps>
    <el-table :data="tableData" border style="width: 100%; height: 500px;">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'mysqls',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  padding: 10px
  box-sizing: border-box
</style>
