<template>
  <div class="container">
    <el-steps :active="1" align-center>
      <el-step title="选择表数据"></el-step>
      <el-step title="配置表字段"></el-step>
      <el-step title="生成配置项"></el-step>
    </el-steps>
    <div class="select-table-data">
      <el-form :inline="true">
        <el-form-item label="关键字">
          <el-input v-model="keyword" placeholder="请输入关键字查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary">下一步</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border stripe style="width: 100%;">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="TABLE_NAME" label="表名称" sortable>
        </el-table-column>
        <el-table-column prop="TABLE_COMMENT" label="表描述"> </el-table-column>
        <el-table-column prop="CREATE_TIME" label="创建时间" sortable>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'mysqls',
  data () {
    return {
      tableData: [],
      keyword: ''
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
  },
  watch: {
    keyword (val) {
      if (val) {
        this.query()
      } else {
        let dataBase = localStorage.getItem('dataBase')
        this.tableData = JSON.parse(dataBase)
      }
    }
  },
  methods: {
    query (val) {
      debugger
      this.debounce(() => {
        let arr = []
        this.tableData.forEach(item => {
          if (item.TABLE_NAME.indexOf(val) >= 0) {
            arr.push(arr)
          }
        })
        this.tableData = arr
      }, 300)
    },
    debounce (func, delay) {
      let timer
      return (...args) => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  padding: 20px
  box-sizing: border-box
  .select-table-data
    margin-top: 20px
</style>
