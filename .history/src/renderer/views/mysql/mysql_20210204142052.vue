<template>
  <div class="container">
    <div class="setting-btn" @click="connectToDatabaseBtn">
      <i class="el-icon-setting"></i>
    </div>

    <el-drawer
      title="我是标题"
      :visible.sync="dialogVisible"
      :direction="direction">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'mysql',
  data () {
    return {
      dialogVisible: false,
      direction: 'rtl'
    }
  },
  created () {
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg)
    })
  },
  methods: {
    connectToDatabaseBtn () {
      this.dialogVisible = true
      // ipcRenderer.send('connectToDatabase', {
      //   host: 'localhost',
      //   user: 'root',
      //   password: '123456',
      //   database: 'cloudcity',
      //   port: 3306
      // })
    }
  }
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