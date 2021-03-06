const mysql = require("mysql");

let connection;

export default function initMysql() {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "cloudcity",
    port: 3306,
  });

  connection.connect((err) => {
    if (err) {
      console.error("mysql 数据库连接失败: " + err.stack);
      return;
    }
    console.log("mysql 数据库连接成功 " + connection.threadId);
  });

  connection.query("select * from tb_sys_role_menu", (err, res) => {
    console.log(err);
    console.log(res);
  });
}

export default function getList() {
  const json = {};
  return new Promise((resolve, reject) => {
    if (err) {
      json.code = -1;
      json.msg = "err: " + err.message;
      reject(json);
    } else {
      resolve(res);
    }
  })
}