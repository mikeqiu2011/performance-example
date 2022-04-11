const express = require('express')
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
    delay(4000)  // the server cannot process any other request, even like query DB
    res.send(`beep beep... ${process.pid}`)
})


// now we use pm2 to manage our cluster, no need to fork in our app.js
app.listen(3000, () => {
    console.log('server is listening at port 3000');
})