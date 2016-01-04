var etape    = require('..')
var ipc      = require('electron').ipcRenderer

etape(function (tape) {

    tape('send/receive data', function (t) {
        // receive 1, 2, 3
        var n = 0
        ipc.on('test-channel', function (e, v) {
            t.equal(v, ++n)
            if (n === 3) {
                // send 1, 2, 3
                ipc.send('test-channel', 1)
                ipc.send('test-channel', 2)
                ipc.send('test-channel', 3)
                t.end()
            }
        })
    })

})
