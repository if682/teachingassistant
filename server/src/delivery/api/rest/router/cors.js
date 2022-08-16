import cors from 'cors'
import { Router } from 'express'

class CorsRouter {

    constructor() {
        this.router = Router()

        this.router.options('*', cors())

        this.router.use('*', (_, res, next) => {
            res.header("Access-Control-Allow-Methods", "*")
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            next()
        })
    }

    getRouter() {
        return this.router
    }
}

export{
    CorsRouter
}