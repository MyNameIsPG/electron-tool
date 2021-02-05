import { ipcMain, ipcRenderer } from 'electron'
ipcMain.on('connectToDatabase', (event, arg) => {
  console.log(event)
  ipcRenderer.send('asynchronous-reply', arg)
})

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
