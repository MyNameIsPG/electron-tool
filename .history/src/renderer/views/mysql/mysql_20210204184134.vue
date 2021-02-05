<template>
  <div class="container">
    <el-steps :active="1" align-center>
      <el-step title="选择表数据"></el-step>
      <el-step title="配置表字段"></el-step>
      <el-step title="生成配置项"></el-step>
    </el-steps>
    <el-table :data="tableData" border style="width: 100%; margin-top: 10px;">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="TABLE_NAME" label="表名称" sortable>
      </el-table-column>
      <el-table-column prop="TABLE_COMMENT" label="表描述"> </el-table-column>
      <el-table-column prop="CREATE_TIME" label="创建时间" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'mysqls',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    let dataBase = localStorage.getItem('dataBase')
    if (dataBase) {
      this.tableData = JSON.parse(dataBase)
    }
    ipcRenderer.on('queryDataBaseTable-notice', (event, res) => {
      if (res.code === 1) {
        window.localStorage.setItem('dataBase', JSON.stringify(res.data))
        this.tableData = res.data
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.container
  padding: 20px
  box-sizing: border-box
</style>
