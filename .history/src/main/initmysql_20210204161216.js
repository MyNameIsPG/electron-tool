import { ipcMain } from 'electron'
import mysql from 'mysql'

let connection

export default function (win, renderer) {
  // 连接数据库
  ipcMain.on('connectToDatabase', (event, arg) => {
    createMysqlConnection(win, arg)
  })
}

function createMysqlConnection (win, config) {
  connection = mysql.createConnection(config)
  connection.connect((err) => {
    if (err) {
      win.webContents.send('asynchronous-reply', {
        code: -1,
        msg: 'mysql 连接失败' + err.stack
      })
      return false
    }
    win.webContents.send('asynchronous-reply', {
      code: 1,
      msg: 'mysql 连接成功' + connection.threadId
    })
  })
}

// export default function initMysql() {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "cloudcity",
//     port: 3306
//   })

//   connection.connect((err) => {
//     if (err) {
//       console.error("mysql 数据库连接失败: " + err.stack)
//       return;
//     }
//     console.log("mysql 数据库连接成功 " + connection.threadId)
//   })
// }

// export default function getList() {
//   return new Promise((resolve, reject) => {
//     connection.query("select * from tb_sys_role_menu", (err, res) => {
//       if (err) {
//         reject({
//           code: -1,
//           msg: err.message
//         })
//       } else {
//         resolve(res)
//       }
//     })
//   })
// }
