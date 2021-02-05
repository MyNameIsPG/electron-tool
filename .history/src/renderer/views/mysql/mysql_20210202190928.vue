<template>
  <div>
    <el-button @click="connectToDatabaseBtn" type="primary">连接数据库</el-button>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'mysql',
  methods: {
    connectToDatabaseBtn () {
      ipcRenderer.send('connectToDatabase', {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'cloudcity',
        port: 3306
      })
    }
  }
}
</script>
