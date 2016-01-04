var etape    = require('..')
var ipc      = require('electron').ipcMain

etape(__dirname+'/ui-test.js', function (tape, window) {

    tape('send/receive data', function (t) {
        // send 1, 2, 3
        window.webContents.send('test-channel', 1)
        window.webContents.send('test-channel', 2)
        window.webContents.send('test-channel', 3)

        // receive 1, 2, 3
        var n = 0
        ipc.on('test-channel', function (e, v) {
            t.equal(v, ++n)
            if (n === 3)
                t.end()
        })
    })

})
