<template>
  <div class="setting">
    <el-dropdown>
      <span class="el-dropdown-link">
        <i style="font-size: 16px;" class="el-icon-setting"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="addConnectToDatabaseBtn">连接数据库</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-drawer
      title="我是标题"
      :visible.sync="dialogVisible"
      :direction="direction">
      <span>连接数据库!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      dialogVisible: false,
      direction: 'rtl'
    }
  },
  methods: {
    addConnectToDatabaseBtn () {
      this.dialogVisible = true
    }
  }
}
</script>