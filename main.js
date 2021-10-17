/* eslint-disable no-console */
const http = require('http')
const path = require('path')
const { Nuxt, Builder } = require('nuxt')
const { app, BrowserWindow } = require('electron')
const config = require('./nuxt.config.js')

config.rootDir = __dirname

const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)
const server = http.createServer(nuxt.render)

console.log('config port', config.server)

let _NUXT_URL_ = `file://${__dirname}/dist/index.html`
if (config.dev) {
  builder.build().catch((err) => {
    console.error(err)
    process.exit(1)
  })
  server.listen(process.env.PORT || 3000)
  _NUXT_URL_ = `http://localhost:${server.address().port}`
  console.log(`Nuxt working on ${_NUXT_URL_}`)
}

let mainWindow = null
const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      preload: path.resolve(path.join(__dirname, 'preload.js')),
    },
  })

  mainWindow.on('closed', () => (mainWindow = null))
  if (config.dev) {
    const pollServer = () => {
      http
        .get(_NUXT_URL_, async (res) => {
          if (res.statusCode !== 200) {
            console.log(
              `Failed to connect to ${_NUXT_URL_} (response ${res.statusCode})`
            )
            setTimeout(pollServer, 1000)
            return
          }

          await mainWindow.loadURL(_NUXT_URL_)
          const {
            default: installExtension,
            VUEJS_DEVTOOLS,
          } = require('electron-devtools-installer')

          installExtension(VUEJS_DEVTOOLS.id)
            .then(() => mainWindow.webContents.openDevTools())
            .catch((err) => console.log('An error occurred: ', err))
        })
        .on('error', () => setTimeout(pollServer, 1000))
    }
    pollServer()
  } else {
    mainWindow.loadURL(_NUXT_URL_)
  }
}
app.on('ready', createWindow)
app.on('window-all-closed', () => app.quit())
app.on('activate', () => mainWindow === null && createWindow())