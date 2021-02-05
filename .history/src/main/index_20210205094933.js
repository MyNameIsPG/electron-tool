'use strict'

import { app, BrowserWindow, Menu } from 'electron'
import _init from './init'

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
    // titleBarStyle: 'customButtonsOnHover',
    // frame: false
  })

  mainWindow.loadURL(winURL)

  const template = [
    { label: 'Help' },
    { label: 'File' },
    { label: 'Edit' },
    { label: 'View' },
    { label: 'Run' }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  _init(mainWindow, mainWindow.webContents)
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
