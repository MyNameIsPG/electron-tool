const mysql = require('mysql')

export default function initMysql () {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cloudcity',
    port: 3306
  })

  connection.connect(err => {
    if (err) {
      console.error('mysql 数据库连接失败: ' + err.stack)
      return
    }
    console.log('mysql 数据库连接成功 ' + connection.threadId)
  })

  connection.query('select * from tb_sys_role_menu', (err, res) => {
    console.log(res)
  })
}
