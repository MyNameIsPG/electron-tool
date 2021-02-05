<template>
  <div class="container">
    <el-steps :active="active" align-center>
      <el-step title="选择表数据"></el-step>
      <el-step title="配置表字段"></el-step>
      <el-step title="生成配置项"></el-step>
    </el-steps>

    <div class="select-table-data">
      <el-form :inline="true">
        <el-form-item label="关键字">
          <el-input
            v-model="keyword"
            placeholder="请输入关键字查询"
            @keyup.enter.native="query"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" @click="lastStep" v-show="active > 1"
            >上一步</el-button
          >
          <el-button type="primary" @click="nextStep">下一步</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData"
        border
        stripe
        @selection-change="handleSelectionChange"
        key="key1"
        v-show="active === 1"
        style="width: 100%;"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="tableName" label="表名称" sortable>
        </el-table-column>
        <el-table-column prop="tableComment" label="表描述"> </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      </el-table>

      <el-table
        :data="tableDataFields"
        border
        stripe
        key="key2"
        v-show="active === 2"
        style="width: 100%;"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="tableSchema" label="数据库" sortable width="100">
        </el-table-column>
        <el-table-column prop="tableName" label="表名称" sortable width="120">
        </el-table-column>
        <el-table-column prop="columnKey" label="主键" width="90">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.columnKey === 'PRI'" type="success">主键</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="columnName" label="数据库字段" width="140">
        </el-table-column>
        <el-table-column prop="columnComment" label="字段描述" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.columnComment"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="dataType" label="数据库类型" width="120">
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
      keyword: '',
      multipleSelection: [],
      active: 1,
      tableDataFields: []
    }
  },
  created () {
    let dataBase = localStorage.getItem('dataBase')
    if (dataBase) {
      this.tableData = JSON.parse(dataBase)
    }
    // 查询表
    ipcRenderer.on('queryDataBaseTable-notice', (event, res) => {
      if (res.code === 1) {
        window.localStorage.setItem('dataBase', JSON.stringify(res.data))
        this.tableData = res.data
      }
    })
    // 查询表字段
    ipcRenderer.on('queryTableFields-notice', (event, res) => {
      if (res.code === 1) {
        res.data.map(item => {
          item.javaType = ''
          item.javaField = ''
          item.isInsert = true
          item.isEdit = true
          item.isList = true
          item.query = true
          item.isRequired = false
          item.htmlType = ''
        })
        console.log(res.data)
        this.tableDataFields.push.apply(this.tableDataFields, res.data)
      }
    })
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    nextStep () {
      if (this.multipleSelection.length > 0) {
        this.active++
        this.getTableFields()
      } else {
        this.$message({
          message: '请先选择数据',
          type: 'warning'
        })
      }
    },
    getTableFields () {
      this.multipleSelection.map(item => {
        ipcRenderer.send('queryTableFields', {
          tableSchema: item.tableSchema,
          tableName: item.tableName
        })
      })
    },
    lastStep () {
      if (this.active > 1) {
        this.active--
        this.tableDataFields = []
      }
    },
    query () {
      if (this.keyword) {
        let arr = []
        this.tableData.forEach(item => {
          if (item.tableName.indexOf(this.keyword) >= 0) {
            arr.push(arr)
          }
        })
        this.tableData = arr
      } else {
        const dataBase = localStorage.getItem('dataBase')
        this.tableData = JSON.parse(dataBase)
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
