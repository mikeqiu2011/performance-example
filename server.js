const express = require('express')

const app = express()

function delay(duration) {
    const startTime = new Date()

    while (Date.now() - startTime < duration) {
        // event loop is completely blocked
    }
}

app.get('/', (req, res) => {
    res.send('performance example')
})

app.get('/timer', (req, res) => {
    // delay the response on purpose
    delay(5000)  // the server cannot process any other request, even like query DB
    res.send('Ding ding ding...')
})

app.listen(3000, () => {
    console.log('server is listening at port 3000');
})