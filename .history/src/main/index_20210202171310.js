'use strict'

import { app, BrowserWindow } from 'electron'
const mysql = require('mysql')

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cloudcity',
    port: 3306
  })

  connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }
    console.log('connected as id ' + connection.threadId)
  })

  connection.query({sql: 'select * from tb_sys_role_menu'}, (res) => {
    console.log(res)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
