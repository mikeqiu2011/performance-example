const express = require('express')
const cluster = require('cluster')

const app = express()

function delay(duration) {
    const startTime = new Date()

    while (Date.now() - startTime < duration) {
        // event loop is completely blocked
    }
}

app.get('/', (req, res) => {
    res.send(`performance example ${process.pid}`) // different worker has different pid
})

app.get('/timer', (req, res) => {
    // delay the response on purpose
    delay(5000)  // the server cannot process any other request, even like query DB
    res.send(`Ding ding ding... ${process.pid}`)
})


/*
the output will be when you run npm start:
    running server process
    Master has been started
    running server process
    worker process started
    running server process
    worker process started
*/
console.log('running server process');
if (cluster.isPrimary) {
    console.log('Master has been started');
    cluster.fork()
    cluster.fork()  // fork two workers
} else {
    console.log('worker process started');
    app.listen(3000) // each worker listen on the same port
}

// app.listen(3000, () => {
//     console.log('server is listening at port 3000');
// })