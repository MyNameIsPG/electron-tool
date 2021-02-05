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
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="主机名或IP地址" prop="host">
          <el-input v-model="ruleForm.host"></el-input>
        </el-form-item>
        <el-form-item label="数据库名称" prop="database">
          <el-input v-model="ruleForm.database"></el-input>
        </el-form-item>
        <el-form-item label="端口" prop="port">
          <el-input v-model="ruleForm.port"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      dialogVisible: false,
      direction: 'rtl',
      ruleForm: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'cloudcity',
        port: 3306
      },
      rules: {
        host: [
          { required: true, message: '请输入主机名或IP地址', trigger: 'blur' },
        ],
        database: [
          { required: true, message: '请输入数据库名称', trigger: 'blur' },
        ],
        port: [
          { required: true, message: '请输入端口', trigger: 'blur' },
        ],
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    addConnectToDatabaseBtn () {
      this.dialogVisible = true
    }
  }
}
</script>