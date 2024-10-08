const { app, BrowserWindow , screen } = require('electron')

const createWindow = () => {
  const {width , height} = screen.getPrimaryDisplay().workAreaSize
    const win = new BrowserWindow({
      width,
      height,
    })
  
    win.loadURL('http://localhost:8081')
  }

app.whenReady().then(()=>{
    createWindow()
})