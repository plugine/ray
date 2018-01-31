'use strict'

import { app, BrowserWindow, ipcMain as ipc, dialog } from 'electron'
import Store from 'electron-store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

// Open app config and keep it in globals
global.config = null
try {
  global.config = new Store()
} catch (e) {}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  let mainWindowOptions = {
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600
    // webPreferences: { devTools: false }
  }

  const appConfig = global.config
  if (appConfig) {
    try {
      const w = appConfig.get('view.window') || {}
      if (w.width) mainWindowOptions.width = w.width
      if (w.height) mainWindowOptions.height = w.height
      if (w.x) mainWindowOptions.x = w.x
      if (w.y) mainWindowOptions.y = w.y
    } catch (e) {}
  } else {
    mainWindowOptions.center = true
  }

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow(mainWindowOptions)

  mainWindow.loadURL(winURL)

  mainWindow.setMenu(null)

  mainWindow.allowClose = false
  mainWindow.on('close', (event) => {
    if (mainWindow.allowClose) return
    event.preventDefault()
    event.sender.send('request-close-app')
  })

  mainWindow.on('closed', () => {
    mainWindow = null
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

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

// ********** Handlers **********

ipc.on('save-project-dialog', function (event) {
  const options = {
    title: 'Save project',
    filters: [
      { name: 'JSON files', extensions: ['json'] }
    ],
    defaultPath: app.getPath('home')
  }
  dialog.showSaveDialog(mainWindow, options, function (filename) {
    event.sender.send('save-project', filename)
  })
})

ipc.on('open-file-dialog', function (event, payload) {
  dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'HTML files', extensions: ['html', 'htm'] }
    ]
  }, function (files) {
    if (files) {
      if (payload && payload.target === 'pt') event.sender.send('add-project-files', files, payload.action)
      else event.sender.send('open-file', files)
    }
  })
})

ipc.on('save-file-dialog', function (event) {
  const options = {
    title: 'Save file',
    filters: [
      { name: 'HTML files', extensions: ['html', 'htm'] }
    ],
    defaultPath: app.getPath('home')
  }
  dialog.showSaveDialog(mainWindow, options, function (filename) {
    event.sender.send('save-file', filename)
  })
})