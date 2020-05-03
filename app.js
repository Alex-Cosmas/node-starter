const express = require('express')

const app = express()



app.listen(80, (err, live) => {
    if (err) {
        console.error(err)
    }
    console.log("Server running on port 80")
});
