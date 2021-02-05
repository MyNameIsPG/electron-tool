import { ipcMain } from 'electron'
import mysql from 'mysql'

let connection

export default function (win, renderer) {
  // 连接数据库
  ipcMain.on('connectToDatabase', (event, arg) => {
    createMysqlConnection(win, arg)
    getDataBaseTable(win)
  })

  // 获取所有的表数据
  ipcMain.on('queryDataBaseTable', (event, arg) => {
    getDataBaseTable(win)
  })

  // 获取表字段
  ipcMain.on('queryTableFields', (event, arg) => {
    getTableFields(win, arg)
  })
}

// 创建数据库实例
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

// 获取所有的表数据
function getDataBaseTable (win) {
  return new Promise(() => {
    const sql = `
      SELECT 
        table_name as tableName, table_comment as tableComment, create_time as createTime 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = 'cloudcity'
    `
    connection.query(sql, (_err, res) => {
      if (_err) {
        win.webContents.send('queryDataBaseTable-notice', {
          code: -1,
          msg: '查询失败'
        })
        return false
      } else {
        win.webContents.send('queryDataBaseTable-notice', {
          code: 1,
          msg: '查询成功',
          data: res
        })
      }
    })
  })
}

// 获取表字段
function getTableFields (win, result) {

}
