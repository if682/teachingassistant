import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import { PORT } from '../config/config.js'
import { Router } from '../router/index.js'

class CmdRest {

    constructor() {
        this.app = express()
        this.middleware()
        this.router()
    }

    router() {
        new Router(this.app)
    }

    middleware() {
        this.app.use(bodyParser.json())
    }

    server() {
        const server = http.createServer(this.app)

        server.listen(PORT, () => {
            console.log(`Server is Running... at port ${PORT}`)
        })
    }
}

export {
    CmdRest
}