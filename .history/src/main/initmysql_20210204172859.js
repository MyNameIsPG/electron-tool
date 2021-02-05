import { ipcMain } from 'electron'
import mysql from 'mysql'

let connection

export default function (win, renderer) {
  // 连接数据库
  ipcMain.on('connectToDatabase', (event, arg) => {
    createMysqlConnection(win, arg)
  })

  // 刷新数据库

  // 获取所有的表数据
  ipcMain.on('queryDataBaseTable', (event, arg) => {
    getDataBaseTable(win)
  })
}

function createMysqlConnection (win, config) {
  connection = mysql.createConnection(config)
  connection.connect((err) => {
    if (err) {
      win.webContents.send('connectToDatabase-notice', {
        code: -1,
        msg: 'mysql 连接失败' + err.stack
      })
      return false
    }
    win.webContents.send('connectToDatabase-notice', {
      code: 1,
      msg: 'mysql 连接成功' + connection.threadId
    })
  })
}

function getDataBaseTable (win) {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM information_schema.`TABLES` WHERE TABLE_SCHEMA = 'cloudcity'", (err, res) => {
      if (err) {
        win.webContents.send('connectToDatabase-notice', {
          code: -1,
          msg: '查询失败'
        })
        return false
      } else {
        win.webContents.send('connectToDatabase-notice', {
          code: 1,
          msg: '查询成功',
          data: res
        })
      }
    }）
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
